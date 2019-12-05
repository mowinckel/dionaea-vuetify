<template>
  <v-container>
    <v-layout text-center wrap>new message</v-layout>
  </v-container>
</template>

<script>
export default {
  metaInfo: {
    meta: [
      { property: "og:title", content: "My Page Title ← My Site" },
      { property: "og:site_name", content: "My Site" },
      // The list of types is available here: http://ogp.me/#types
      { property: "og:type", content: "website" },
      // Should the the same as your canonical link, see below.
      {
        property: "og:url",
        content: "https://www.my-site.com/my-special-page"
      },
      {
        property: "og:image",
        content: "https://www.my-site.com/my-special-image.jpg"
      },
      // Often the same as your meta description, but not always.
      { property: "og:description", content: "I have things here on my site." }
    ]
  },
  data: () => ({})
};
</script>
