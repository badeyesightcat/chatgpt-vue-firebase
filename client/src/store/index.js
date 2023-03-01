import { createStore } from 'vuex';
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '@/firebase';
import router from '@/router';
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
    async signInAction({ commit }, payload) {
      const { email, password } = payload;

      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (error) {
        switch (error.code) {
          case 'auth/user-not-found':
            alert('User not found.');
            break;
          case 'auth/wrong-password':
            alert('Wrong password.');
            break;
          default:
            alert('Something went wrong.');
        }
        return;
      }

      commit(SET_USER, auth.currentUser);
      router.push('/home');
    },
    async signUpAction({ commit }, payload) {
      const { email, password } = payload;

      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (error) {
        switch (error.code) {
          case 'auth/email-already-in-use':
            alert('Email already in use.');
            break;
          case 'auth/invalid-email':
            alert('Invalid email.');
            break;
          case 'auth/operation-not-allowed':
            alert('Operation not allowed.');
            break;
          case 'auth/weak-password':
            alert('Weak password.');
            break;
          default:
            alert('Something went wrong.');
        }
        return;
      }

      commit(SET_USER, auth.currentUser);
      router.push('/home');
    },
    async signOutAction({ commit }) {
      await signOut(auth);

      commit(CLEAR_USER);

      router.push('/');
    },
    fetchUserAction({ commit, state }) {
      auth.onAuthStateChanged(async (user) => {
        if (user === null) {
          commit(CLEAR_USER);
        } else {
          commit(SET_USER, user);

          if (
            router.isReady() &&
            (router.currentRoute.value.path === '/' ||
              router.currentRoute.value.path === '/sign-in' ||
              router.currentRoute.value.path === '/sign-up')
          ) {
            router.push('/home');
          }
        }
      });
    },
  },
});

export default store;
