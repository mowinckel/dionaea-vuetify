<template>
  <v-container>
    <Title />
    <Demo />
    <FirebaseLogin />
    <Ad />
  </v-container>
</template>

<script>
import Title from "@/components/Welcome/Title";
import Demo from "@/components/Craft/Demo";
import FirebaseLogin from "@/components/Welcome/FirebaseLogin";
import Ad from "@/components/Welcome/Ad";

export default {
  components: {
    FirebaseLogin,
    Demo,
    Ad,
    Title
  }
};
</script>