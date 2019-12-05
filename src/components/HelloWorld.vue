<template>
  <v-container>
    <v-layout text-center wrap>new message</v-layout>
  </v-container>
</template>

<script>
export default {
  metaInfo: () => ({
    meta: [
      { property: "og:title", content: "My Page Title ← My Site" },
      { property: "og:site_name", content: "My Site" },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://www.my-site.com/my-special-page"
      },
      {
        property: "og:image",
        content: "https://www.my-site.com/my-special-image.jpg",
        vmid: "test"
      },
      { property: "og:description", content: "I have things here on my site." }
    ]
  }),
  data: () => ({})
};
</script>
