import { createStore } from 'vuex';
import photo from './modules/photo/';

const store = createStore ({
  modules: {
    photo,
  }
})

export default store;

