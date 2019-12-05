<template>
  <div>
    <h3>{{ userAgent }}</h3>
    <h3>{{ ipAddress }}</h3>
  </div>
</template>

<script>
export default {
  metaInfo: {
    meta: [
      { property: "og:title", content: "test" },
      { property: "og:image", content: "test" },
      { property: "og:description", content: "test" }
    ]
  },
  data: () => ({
    userAgent: window.navigator.userAgent,
    ipAddress: undefined
  }),
  mounted: async function() {
    try {
      let response = await this.$axios.get("https://api.ipify.org?format=json");
      this.ipAddress = response.data.ip;

      response = await this.$axios.get(
        `${process.env.VUE_APP_BACKEND_URL}/api/v1/trap/${this.$route.params.key}`
      );

      await this.$axios.post(
        `${process.env.VUE_APP_BACKEND_URL}/api/v1/test/`,
        {
          shorten_key: this.$route.params.key,
          ip_address: this.ipAddress,
          user_agent: this.userAgent
        }
      );
      window.location.href = response.data.target_url;
    } catch (error) {
      /* eslint-disable no-console */
      console.log(error);
    }
  }
};
</script>
