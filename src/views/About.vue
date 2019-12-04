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
      .get(`/api/v1/trap/${this.$route.params.key}`, {
        headers: {
          Authorization:
            "jwt eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6InJ1bW8iLCJleHAiOjE1NzU0NjMwMTYsImVtYWlsIjoiYXJmcnVtb0BnbWFpbC5jb20iLCJvcmlnX2lhdCI6MTU3NTM3NjYxNn0.CBrmLpKXxXY5ZQQYVxDdGGVFBy_xK6C4_OyBBOwHZW4"
        }
      })
      .then(response => {
        this.targetURL = response.data.target_url;
        // window.location.href = this.targetURL;
      });
  }
};
</script>
