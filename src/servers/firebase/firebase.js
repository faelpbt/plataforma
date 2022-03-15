import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAUxDmQ05ho2Utvwk6d32NdiEK5sIzFUEI',
  authDomain: 'backend-zeus-fcea7.firebaseapp.com',
  projectId: 'backend-zeus-fcea7',
  storageBucket: 'backend-zeus-fcea7.appspot.com',
  messagingSenderId: '536945451277',
  appId: '1:536945451277:web:e43fcd2a26bf8a75941044',
  measurementId: 'G-K7GG1JXKC7',
};

const firebaseApp = initializeApp(firebaseConfig);

export const authenticationApp = getAuth(firebaseApp);

export const storage = getStorage(firebaseApp);
