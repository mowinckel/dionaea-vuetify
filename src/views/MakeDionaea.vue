<template>
  <v-app id="inspire">
    <v-app-bar app clipped-right color="deep-purple" dark>
      <v-toolbar-title>Toolbar</v-toolbar-title>
      <v-spacer />
      <v-switch hide-details v-model="$vuetify.theme.dark"></v-switch>
    </v-app-bar>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="7" lg="5">
            <v-card>
              <v-toolbar color="deep-purple accent-2" dark flat dense>
                <v-toolbar-title>Make trap</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form v-model="form">
                  <v-text-field
                    v-model="targetURL"
                    color="deep-purple accent-1"
                    label="target URL"
                    name="targetURL"
                    :rules="rules"
                    outlined
                    @keypress.enter="submit()"
                  />
                  <v-text-field
                    id="trapURL"
                    v-model="trapURL"
                    v-show="trapURL"
                    color="deep-purple accent-1"
                    label="shorten URL"
                    name="shortenURL"
                    outlined
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn
                  v-show="trapURL"
                  @click="copy()"
                  color="deep-purple accent-2"
                  dark
                  outlined
                >Copy</v-btn>
                <v-btn
                  @click="submit()"
                  color="deep-purple accent-2"
                  class="white--text"
                  :disabled="!form"
                  depressed
                >Submit</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="7" lg="5">
            <v-card>
              <template v-for="item in trapList">
                <v-list-item three-line :key="item.shorten_key" @click="detail(item.shorten_key)">
                  <v-list-item-content>
                    <v-list-item-title>https://{{ base_url }}/trap/{{ item.shorten_key }}</v-list-item-title>
                    <v-list-item-subtitle>{{ item.target_url }}</v-list-item-subtitle>
                    <v-list-item-subtitle>{{ item.created_at }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-card>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="7" lg="5">
            <v-card>
              <template v-for="item in information">
                <v-list-item three-line :key="item.id">
                  <v-list-item-content>
                    <v-list-item-title>{{ item.ip_address }}</v-list-item-title>
                    <v-list-item-subtitle>{{ item.user_agent }}</v-list-item-subtitle>
                    <v-list-item-subtitle>{{ item.region_name }} {{ item.city }}</v-list-item-subtitle>
                    <v-list-item-subtitle>{{ item.accessed_at }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-card>
          </v-col>
        </v-row>
        <v-row align="center" justify="center"></v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    dark: false,
    form: false,
    base_url: document.domain,
    jwt:
      "jwt eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6InJ1bW8iLCJleHAiOjE1NzU1NTAxOTYsImVtYWlsIjoiYXJmcnVtb0BnbWFpbC5jb20iLCJvcmlnX2lhdCI6MTU3NTQ2Mzc5Nn0.AaP830aqCSqJbsVN3XEx8qi5t5tU8NHlF-3mPEYZpDs",
    trapList: [],
    trapURL: undefined,
    expiration: ["10min", "20min", "30min", "1hour"],
    targetURL: undefined,
    information: undefined,
    rules: [
      value => !!value || "Required",
      value => {
        const pattern = /^(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()])/;
        return pattern.test(value) || "Invalid URL.";
      }
    ]
  }),
  mounted: function() {
    this.$axios
      .get(`${process.env.VUE_APP_BACKEND_URL}/api/v1/trap/`)
      .then(response => {
        this.trapList = response.data.results;
      })
      .catch(error => {
        /* eslint-disable no-console */
        console.log(error);
      });
  },
  methods: {
    copy: () => {
      let copyURL = document.querySelector("#trapURL");
      copyURL.setAttribute("type", "text");
      copyURL.select();

      document.execCommand("copy");
    },
    submit: function() {
      if (this.form) {
        this.$axios
          .post(`${process.env.VUE_APP_BACKEND_URL}/api/v1/trap/`, {
            target_url: this.targetURL
          })
          .then(response => {
            this.trapURL = `https://${document.domain}/trap/${response.data.shorten_key}`;
            this.trapList.unshift({
              target_url: this.targetURL,
              shorten_key: response.data.shorten_key
            });
          })
          .catch(error => {
            /* eslint-disable no-console */
            console.log(error);
          });
      }
    },

    detail: function(shorten_key) {
      this.$axios
        .get(`${process.env.VUE_APP_BACKEND_URL}/api/v1/test/${shorten_key}`)
        .then(response => {
          this.information = response.data;
        });
      // .catch(error => {});
    },

    getJWT: function() {
      this.$axios
        .get(`${process.env.VUE_APP_BACKEND_URL}/api/v1/jwt/`, {
          username: "",
          password: ""
        })
        .then(response => {
          this.jwt = response.data;
        });
    },
    verifyJWT: function() {},
    refreshJWT: function() {}
  }
};
</script>