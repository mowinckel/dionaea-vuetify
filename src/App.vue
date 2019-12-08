<template>
  <v-app>
    <v-app-bar app clipped-right flat>
      <v-toolbar-title>title</v-toolbar-title>
      <v-spacer />
      <v-btn text x-large>TEST</v-btn>
      <v-btn text x-large>TEST</v-btn>
      <v-btn text x-large>TEST</v-btn>
      <v-btn text x-large>TEST</v-btn>
      <v-spacer />
      <v-switch hide-details v-model="$vuetify.theme.dark"></v-switch>
    </v-app-bar>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  created: function() {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      this.$vuetify.theme.dark = true;
    }
  },

  components: {},

  data: () => ({})
};
</script>

