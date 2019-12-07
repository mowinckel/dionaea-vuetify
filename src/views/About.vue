<template>
  <div></div>
</template>

<script>
export default {
  data: () => ({
    userAgent: window.navigator.userAgent,
    ipAddress: undefined
  }),
  created: async function() {
    try {
      // await this.$axios
      //   .get("https://api.ipify.org?format=json")
      //   .then(response => {
      //     this.ipAddress = response.data.ip;
      //   });

      // await this.$axios.post(
      //   `${process.env.VUE_APP_BACKEND_URL}/api/v1/test/`,
      //   {
      //     shorten_key: this.$route.params.key,
      //     ip_address: this.ipAddress,
      //     user_agent: this.userAgent
      //   }
      // );

      // await this.$axios.get(
      //   `${process.env.VUE_APP_BACKEND_URL}/api/v1/trap/${this.$route.params.key}`
      // );
    } catch (error) {
      /* eslint-disable no-console */
      console.log(error);
    }
  }
};
</script>
