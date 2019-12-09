<template>
  <v-row align="center" justify="center">
    <v-col lg="5" sm="6">
      <v-card light>
        <v-container fluid>
          <v-row justify="center">
            <v-col cols="11">
              <v-btn
                class="mb-3 text-lowercase"
                large
                block
                dark
                color="deep-purple darken-2"
              >Login with Github</v-btn>
              <v-btn class="text-lowercase" dark large block color="blue accent-2">Login with Google</v-btn>
            </v-col>
            <v-col cols="11">
              <v-divider light class="mb-8"></v-divider>
              <v-text-field hide-details class="mb-3" light label="Email Address" outlined dense></v-text-field>
              <v-text-field light label="Password" outlined dense></v-text-field>
              <v-btn
                class="text-lowercase"
                outlined
                large
                dark
                block
                color="deep-purple accent-2"
              >Login Now!</v-btn>
            </v-col>
          </v-row>
        </v-container>
        <v-divider></v-divider>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({})
};
</script>
