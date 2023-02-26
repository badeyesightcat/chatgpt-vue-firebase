import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyASoLz6IkNAE4MfAIjQ01h7lE1Nsi3wFxE',
  authDomain: 'chatgpt-clone-vue.firebaseapp.com',
  projectId: 'chatgpt-clone-vue',
  storageBucket: 'chatgpt-clone-vue.appspot.com',
  messagingSenderId: '966759091935',
  appId: '1:966759091935:web:c9c811781ca7d8a573636a',
  measurementId: 'G-X9M661LXSL',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
// auth.languageCode = 'ko';

export { auth };
