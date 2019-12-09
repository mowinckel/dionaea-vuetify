<template>
  <v-container>
    <Title />
    <FirebaseLogin />
    <Ad />
  </v-container>
</template>

<script>
import Title from "@/components/Welcome/Title";
import FirebaseLogin from "@/components/Welcome/FirebaseLogin";
import Ad from "@/components/Welcome/Ad";

export default {
  components: {
    FirebaseLogin,
    Ad,
    Title
  }
};
</script>