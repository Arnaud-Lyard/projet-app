<!-- <template>

	<ion-item>
		<ion-item :router-link="`/photos/${$route.params.categoryid}/${photoItem.id}`">
			<ion-thumbnail slot="start">
				<ion-img :src="photoItem.Illustration" :alt="photoItem.name"></ion-img>
			</ion-thumbnail>
				<ion-label>
				{{ photoItem.Period }}
				</ion-label>
				<ion-label>
				{{ week }}
				</ion-label>
		</ion-item>
  </ion-item>

</template>

<script>
import { IonItem, IonThumbnail, IonImg, IonLabel } from "@ionic/vue";
import { mapGetters } from 'vuex';


export default {
    // data() {
    //     return {
    //       week: [{ day: "Lundi" }, { day: "Mardi" }, { day: "Mercredi" }, { day: "Jeudi" }, { day: "Vendredi" }]
    //     }
    //   },

	props: ["photoItem"],
	computed: {
	...mapGetters(["getdays"]),
	},

  components: {
    IonItem,
    IonThumbnail,
    IonImg,
    IonLabel,
  },
};
</script>