<template>
<div>
  <ion-list v-for="(photoItem,index) in photoItems.slice(0,5)" :key="index" :photoItem="photoItem">

    <!-- <photo-list-item 
        v-for="(photoItem,index) in photoItems.slice(0,5)"
        :key="index" 
        :photoItem="photoItem"
        :week
>
    </photo-list-item> -->


		<ion-item :router-link="`/photos/${$route.params.categoryid}/${photoItem.id}`">
        <ion-label>
				{{ week[index].day }}
				</ion-label>
			<ion-thumbnail slot="start">
				<ion-img :src="photoItem.Illustration" :alt="photoItem.name"></ion-img>
			</ion-thumbnail>
				<ion-label>
				{{ photoItem.name }}
				</ion-label>
		</ion-item>

  </ion-list>

</div>
</template>

<script>
import { mapGetters } from 'vuex';

import { IonItem, IonList, IonThumbnail, IonImg, IonLabel } from "@ionic/vue";

export default {
    data() {
        return {
          week: [{ day: "Lundi" }, { day: "Mardi" }, { day: "Mercredi" }, { day: "Jeudi" }, { day: "Vendredi" }]
        }
      },

  
  // props: ["photoItem"],
  
  computed: {
    ...mapGetters(["photoItems"]),
    // ...mapGetters(["getdays"]),
  },
  components: {
    IonItem,
    IonList,
    IonThumbnail,
    IonImg,
    IonLabel,

  },
};
</script>