<template>
  <v-app id="inspire">
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
                    color="deep-purple"
                    label="target URL"
                    name="targetURL"
                    :rules="rules"
                    outlined
                  />
                  <v-text-field
                    id="trapURL"
                    v-model="trapURL"
                    v-show="trapURL"
                    color="deep-purple"
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
          <v-col cols="12" sm="8" md="7" lg="5">
            <v-card>
              <template v-for="item in trapList">
                <v-list-item :key="item.shorten_key">
                  <v-list-item-content>
                    <v-list-item-title>{{ item.target_url }}</v-list-item-title>
                    <v-list-item-subtitle>{{ item.shorten_key }}</v-list-item-subtitle>
                    <!-- <v-list-item-subtitle>{{ item.memo }}</v-list-item-subtitle> -->
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    form: false,
    jwt:
      "jwt eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6InJ1bW8iLCJleHAiOjE1NzU1NTAxOTYsImVtYWlsIjoiYXJmcnVtb0BnbWFpbC5jb20iLCJvcmlnX2lhdCI6MTU3NTQ2Mzc5Nn0.AaP830aqCSqJbsVN3XEx8qi5t5tU8NHlF-3mPEYZpDs",
    trapList: [],
    trapURL: undefined,
    expiration: ["10min", "20min", "30min", "1hour"],
    targetURL: undefined,
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
      .get("/api/v1/trap/", {
        headers: { Authorization: this.jwt }
      })
      .then(response => {
        this.trapList = response.data.results;
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
      this.$axios
        .post(
          "/api/v1/trap/",
          {
            target_url: this.targetURL
          },
          {
            headers: {
              Authorization: this.jwt
            }
          }
        )
        .then(response => {
          this.trapURL = `http://${document.domain}/trap/${response.data.shorten_key}`;
          /* eslint-disable no-console */
          // console.log(response.data.shorten_url);
        })
        .catch(error => {
          /* eslint-disable no-console */
          console.log(error);
        });
    },

    getJWT: function() {
      this.$axios
        .get("/api/v1/jwt/", {
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