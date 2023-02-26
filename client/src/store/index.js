import { createStore } from 'vuex';
import { SET_USER, CLEAR_USER } from '@/store/mutationTypes';

const store = createStore({
  state() {
    return {
      user: null,
    };
  },
  mutations: {
    [SET_USER](state, user) {
      state.user = user;
    },
    [CLEAR_USER](state) {
      state.user = null;
    },
  },
  actions: {
    async signIn({ commit }, payload) {},
    async signUp({ commit }, payload) {},
    async signOut({ commit }) {},
  },
});

export default store;
