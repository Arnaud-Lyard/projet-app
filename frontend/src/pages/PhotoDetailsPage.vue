<template>
  <base-layout
    :page-title="loadedPhoto ? loadedPhoto.name : 'Loading...'"
    page-default-back-link="/memories">


    <h2 v-if="!loadedPhoto">Could not find a photo for the given id.</h2>
    <photo-overview 
      v-else
      :title="loadedPhoto.name"
      :image="loadedPhoto.Illustration"
      :description="loadedPhoto.Period">
      </photo-overview>

  </base-layout>
</template>

<script>
import PhotoOverview from "../components/photos/PhotoOverview.vue";
import { mapGetters } from 'vuex';


export default {
  props: ["photoItem"],

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
  //     // console.log(this.$store.getters.photo(2));
  //     // console.log(this.photoId)
  //     // console.log(this.$store.getters.getphoto());
  //     // console.log(this.$store);

  //     // console.log(this.$store.getters.photo(this.photoItemId))
  //     // console.log(this.$store.getters.photo(this.photoItemId))
  // console.log(this.$store.state)
  // console.log(this.photoId);
      return this.$store.getters.getphoto(this.photoId);
    },
    ...mapGetters(["photoItems"]),
  },
  // watch: {
  //   $route(currentRoute) {
  //     this.photoItemId = currentRoute.params.id;
  //   },
  // },
};
</script>