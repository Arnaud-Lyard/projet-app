<template>
  <base-layout
    :page-title="loadedPhoto ? loadedPhoto.title : 'Loading...'"
    page-default-back-link="/photos"
  >
    <h2 v-if="!loadedPhoto">Could not find a photo for the given id.</h2>
    <photo-overview 
      v-else 
      :title="loadedPhoto.title" 
      :image="loadedPhoto.image" 
      :description="loadedPhoto.description"></photo-overview>
  </base-layout>
</template>

<script>
import PhotoOverview from "../components/photos/PhotoOverview.vue";

export default {
  components: {
    PhotoOverview,
  },
  data() {
    return {
      photoId: this.$route.params.id,
    };
  },
  computed: {
    loadedPhoto() {
      return this.$store.getters.photo(this.photoId);
    },
  },
  // watch: {
  //   $route(currentRoute) {
  //     this.photoId = currentRoute.params.id;
  //   },
  // },
};
</script>