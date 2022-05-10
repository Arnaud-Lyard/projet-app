<template>
  <ion-page>
     <ion-header>
      <ion-toolbar>
        <ion-buttons slot="end">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-buttons slot="start">
          <ion-back-button
            text=""
            :default-href="pageDefaultBackLink"
          ></ion-back-button>
        </ion-buttons>
        <ion-title>{{ pageTitle }}</ion-title>
        <ion-buttons slot="start">
          <slot name="actions-end"></slot>
        </ion-buttons>
      </ion-toolbar>
    </ion-header> 
<!--
    <ion-header :translucent="true">
      <ion-toolbar>

         <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons> 

        <ion-buttons slot="start">
          <ion-back-button
            color="primary"
            :default-href="pageDefaultBackLink"
          ></ion-back-button>
        </ion-buttons>

        <ion-title>{{ pageTitle }}</ion-title>

        <ion-buttons slot="end">
          <slot name="actions-end"></slot>
        </ion-buttons>

      </ion-toolbar>
    </ion-header>-->

    <ion-content>
      <slot />
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonMenuButton,
  IonContent,
  IonBackButton,
  IonButtons,
} from "@ionic/vue";

export default {
  props: ["pageTitle", "pageDefaultBackLink"],
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonMenuButton,
    IonContent,
    IonBackButton,
    IonButtons,
  },
};
</script>