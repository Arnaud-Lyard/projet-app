import api from "../../../services/Api";

const state = () => {
  return {
    photoItems: [],
	status:'loading',
	days: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"]
  }
}

const mutations = {

	UPDATE_STATUS (state, payload) {
		state.status = payload;
	},

    UPDATE_IMAGE_ITEMS (state, payload) {
		state.photoItems = payload;
	},

    INCREMENT_IMAGE_ITEMS (state) {

		/* get data from state before shuffle */
		var firstArray = JSON.parse(JSON.stringify(state.photoItems));
		
		/* define the function to shuffle the array */
		function shuffleArray() {
			for (var i = state.photoItems.length - 1; i > 0; i--) {
				var j = Math.floor(Math.random() * (i + 1));
				var temp = state.photoItems[i];
				state.photoItems[i] = state.photoItems[j];
				state.photoItems[j] = temp;
			}
		}

		/* execute the shuffleArray function */
		shuffleArray();
	
		/* get data from state after shuffle */
		var secondArray = JSON.parse(JSON.stringify(state.photoItems));

		/* Compare if first data from state is the same before and after shuffle */
		if (firstArray[0].id === secondArray[0].id){
			do {
				shuffleArray()
			}
			while (firstArray[0].id !== secondArray[0].id)
		}
	},

    DECREMENT_IMAGE_ITEMS (state) {
		/* get data from state before shuffle */
		var firstArray = JSON.parse(JSON.stringify(state.photoItems));
		
		/* define the function to shuffle the array */
		function shuffleArray() {
			for (var i = state.photoItems.length - 1; i > 0; i--) {
				var j = Math.floor(Math.random() * (i + 1));
				var temp = state.photoItems[i];
				state.photoItems[i] = state.photoItems[j];
				state.photoItems[j] = temp;
			}
		}

		/* execute the shuffleArray function */
		shuffleArray();
	
		/* get data from state after shuffle */
		var secondArray = JSON.parse(JSON.stringify(state.photoItems));

		/* Compare if first data from state is the same before and after shuffle */
		if (firstArray[0].id === secondArray[0].id){
			do {
				shuffleArray()
			}
			while (firstArray[0].id !== secondArray[0].id)
		}
    }
}
	
    
const actions = {
    async getphotoItems ({ commit }) {
        let response = await api().get('/image');
        commit('UPDATE_IMAGE_ITEMS', response.data),
		commit('UPDATE_STATUS', 'success');
    },
    incrementphotoItems ({ commit }, newUpdate) {
    commit('INCREMENT_IMAGE_ITEMS', newUpdate)
    },
    decrementphotoItems ({ commit }, newUpdate1) {
    commit('DECREMENT_IMAGE_ITEMS', newUpdate1)
    }
}

const getters = {
	// photoItems(state) {
	// return state.photoItems;
	// },
	getphoto(state) {
		return (photoId) => {
			// console.log(photoItemId);
			// console.log(state.photoItems.find((photoItem) => photoItem.id == photoId));
			return state.photoItems.find((photoItem) => photoItem.id == photoId);
		};
	},
	photoItems: state => state.photoItems,
	getstatus: state => state.status,
	// photo: state => state.photoItem.Illustration
	getdays: state => state.days
}

const photoModule = {
    state,
    mutations,
    actions,
    getters
}
  
  export default photoModule;