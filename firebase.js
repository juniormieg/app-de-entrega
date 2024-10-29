import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzp9nDCsT8Isl9M1E8tA2W-INOScXnA3A",
  authDomain: "ps-ux-af96f.firebaseapp.com",
  projectId: "ps-ux-af96f",
  storageBucket: "ps-ux-af96f.appspot.com",
  messagingSenderId: "431452422186",
  appId: "1:431452422186:web:1bde0f7e084628952f4353",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
