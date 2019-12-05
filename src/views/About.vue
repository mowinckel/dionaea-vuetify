<template>
  <h1>{{ userAgent }}</h1>
</template>

<script>
export default {
  data: () => ({
    targetURL: undefined,
    userAgent: window.navigator.userAgent
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
