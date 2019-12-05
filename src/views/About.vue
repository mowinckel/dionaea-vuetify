<template>
  <h3>{{ userAgent }}</h3>
</template>

<script>
export default {
  data: () => ({
    targetURL: undefined,
    userAgent: window.navigator.userAgent,
    metaInfo: {
      meta: [
        { property: "og:title", content: "test" },
        { property: "og:image", content: "test" },
        { property: "og:description", content: "test" }
      ]
    }
  }),
  mounted: function() {
    this.$axios
      .get(
        `${process.env.VUE_APP_BACKEND_URL}/api/v1/trap/${this.$route.params.key}`
      )
      .then(response => {
        this.targetURL = response.data.target_url;
        window.location.href = this.targetURL;
      });
  }
};
</script>
