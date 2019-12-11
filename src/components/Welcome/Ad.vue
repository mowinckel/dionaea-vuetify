<template>
  <v-row justify="center">
    <v-col lg="5" sm="6" xs="12">
      <v-card flat>
        <v-card-text>{{ this.$store.getters.user }}</v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>