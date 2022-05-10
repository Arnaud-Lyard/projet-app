import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      photos: [
        {
          id: 'm1',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Mighty_Mountains_with_Snow.jpg/640px-Mighty_Mountains_with_Snow.jpg',
          title: 'A trip into the mountains',
          description: 'It was a really nice trip!',
          category: 'one'
        },
        {
          id: 'm2',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/A_surfer_surfing_on_the_ocean_%28Unsplash%29.jpg/640px-A_surfer_surfing_on_the_ocean_%28Unsplash%29.jpg',
          title: 'Surfing the sea side',
          description: 'Feeling the cool breeze',
          category: 'two'
        },
        {
          id: 'm3',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Indian_-_Food.jpg/640px-Indian_-_Food.jpg',
          title: 'Good eating',
          description: 'Really tasty!',
          category: 'two'
        },
      ],
    };
  },
  mutations: {
    addPhoto(state, photoData) {
      const newPhoto = {
        id: new Date().toISOString(),
        title: photoData.title,
        image: photoData.imageUrl,
        description: photoData.description
      };

      state.photos.unshift(newPhoto);
    }
  },
  actions: {
    addPhoto(context, photoData) {
      context.commit('addPhoto', photoData);
    }
  },
  getters: {
    photos(state) {
      return state.photos;
    },
    photo(state) {
      return (photoId) => {
        return state.photos.find((photo) => photo.id === photoId);
      };
    },
  },
});

export default store;
