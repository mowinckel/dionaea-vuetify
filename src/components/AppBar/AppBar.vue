<template>
  <v-app-bar app>
    <v-toolbar-title>title</v-toolbar-title>
    <v-spacer />
    <v-btn text x-large>docs</v-btn>
    <v-btn text x-large>about</v-btn>
    <v-btn text x-large>{{ this.$store.getters.user }}</v-btn>
    <v-spacer />
    <v-switch hide-details v-model="$vuetify.theme.dark"></v-switch>
  </v-app-bar>
</template>