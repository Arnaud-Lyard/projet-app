<template>
  <base-layout page-title="All Photos">
    <template v-slot:actions-end>
      <ion-button router-link="/photos/add">
        <ion-icon slot="icon-only" :icon="add"></ion-icon>
      </ion-button>
    </template>
    <photos-list :photos="photos"></photos-list>
  </base-layout>
</template>

<script>
import { IonButton, IonIcon } from "@ionic/vue";
import { add } from "ionicons/icons";

import PhotosList from "../../components/photos/PhotosList.vue";

export default {
  components: {
    PhotosList,
    IonButton,
    IonIcon
  },
  data() {
    return { add };
  },
  computed: {
    photos() {
      return this.$store.getters.photos;
    },
  },
};
</script>