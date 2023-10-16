import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAsisO4WhqO_GVO3eE86dMFu8jYQvUYxho",
  authDomain: "sanguemt.firebaseapp.com",
  projectId: "sanguemt",
  storageBucket: "sanguemt.appspot.com",
  messagingSenderId: "648928028192",
  appId: "1:648928028192:web:3838140247d5acce9f7e45",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
