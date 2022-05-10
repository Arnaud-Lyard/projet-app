<template>
  <base-layout :page-title="$route.params.categoryid">
    <template v-slot:actions-end>
      <ion-button router-link="/photos/add">
        <ion-icon slot="icon-only" :icon="add"></ion-icon>
      </ion-button>
    </template>
    <photos-list :photoItems="photoItems"></photos-list>
  </base-layout>
</template>

<script>
import { IonButton, IonIcon } from "@ionic/vue";
import { add } from "ionicons/icons";

import PhotosList from "../components/photos/PhotosList.vue";

export default {
  props: ["photoItem"],
  components: {
    PhotosList,
    IonButton,
    IonIcon
  },
  data() {
    return { add };
  },
  computed: {
    photoItems() {
      return this.$store.getters.photoItems;
    },
  },
};
</script>

<!--
<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>{{ $route.params.categoryid }}</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ $route.params.categoryid }}</ion-title>
        </ion-toolbar>
      </ion-header>

      <template v-slot:actions-end>
      <ion-button router-link="/photos/add">
        <ion-icon slot="icon-only" :icon="add"></ion-icon>
      </ion-button>
    </template>
    <photos-list :photos="photos"></photos-list>
    
      <div id="container">
        <strong class="capitalize">{{ $route.params.categoryid }}</strong>
        <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonButton, IonIcon } from "@ionic/vue";
import { add } from "ionicons/icons";

import PhotosList from "../components/photos/PhotosList.vue";

import { defineComponent } from 'vue';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';

export default defineComponent({
  name: 'FolderPage',
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    PhotosList,
    IonButton,
    IonIcon,
  },
  data() {
    return { add };
  },
  computed: {
    photos() {
      return this.$store.getters.photos;
    },
  },
});
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
-->