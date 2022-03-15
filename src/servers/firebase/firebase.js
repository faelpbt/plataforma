import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 
  authDomain:
  projectId:
  storageBucket:
  messagingSenderId:
  appId:
  measurementId:
};

const firebaseApp = initializeApp(firebaseConfig);

export const authenticationApp = getAuth(firebaseApp);

export const storage = getStorage(firebaseApp);
