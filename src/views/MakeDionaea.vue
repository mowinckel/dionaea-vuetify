<template>
  <v-card class="mx-auto" style="max-width: 500px;">
    <v-toolbar color="deep-purple accent-4" cards dark flat>
      <v-card-title class="title font-weight-regular">Make Dionaea</v-card-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-form ref="form" v-model="form" class="pa-4 pt-6">
      <v-textarea
        v-model="targetURL"
        color="deep-purple"
        label="Target URL"
        :rules="rules"
        auto-grow
        outlined
        rows="1"
      ></v-textarea>
      <v-textarea outlined label="Trap URL" rows="3" :value="trapURL"></v-textarea>
      <v-select
        v-model="select"
        :items="expiration"
        :rules="[v => !!v || 'Item is required']"
        label="expiration after"
        required
      ></v-select>
    </v-form>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="!form"
        class="white--text"
        color="deep-purple accent-4"
        depressed
        @click="submit()"
      >Submit</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    form: false,
    jwt: undefined,
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
  methods: {
    submit: function() {
      this.$axios
        .post(
          "/api/v1/trap/",
          {
            target_url: this.targetURL
          },
          {
            headers: {
              Authorization:
                "jwt eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6InJ1bW8iLCJleHAiOjE1NzU0NjMwMTYsImVtYWlsIjoiYXJmcnVtb0BnbWFpbC5jb20iLCJvcmlnX2lhdCI6MTU3NTM3NjYxNn0.CBrmLpKXxXY5ZQQYVxDdGGVFBy_xK6C4_OyBBOwHZW4"
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
          username: "rumo",
          password: "tardis21!"
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