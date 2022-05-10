<template>
  <base-layout page-title="Ajouter une photo" page-default-back-link="/photos">
    <create-photo-form @save-photo="savePhoto"></create-photo-form>
  </base-layout>
</template>

<script>
import CreatePhotoForm from "../components/photos/CreatePhotoForm.vue";

export default {
  components: {
    CreatePhotoForm,
  },
  methods: {
    savePhoto(photoData) {
      this.$store.dispatch('addPhoto', photoData);
      this.$router.replace('/photos');
    }
  }
};
</script>