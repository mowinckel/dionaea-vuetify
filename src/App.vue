<template>
  <v-app>
    <AppBar />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import AppBar from "@/components/AppBar/AppBar";

export default {
  name: "App",
  components: {
    AppBar
  },
  created: function() {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      this.$vuetify.theme.dark = true;
    }
  }
};
</script>

