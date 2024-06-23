// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAK5rDVy15RETpHHZeKRt18NsL99Yly5Nk',
  authDomain: 'fir-project-60620.firebaseapp.com',
  projectId: 'fir-project-60620',
  storageBucket: 'fir-project-60620.appspot.com',
  messagingSenderId: '50597317122',
  appId: '1:50597317122:web:c6149fe7ba688d232ef51b',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
