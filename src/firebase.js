import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const app = initializeApp({
  apiKey: "",
  authDomain: "project1-2c878.firebaseapp.com",
  projectId: "project1-2c878",
  storageBucket: "project1-2c878.appspot.com",
  messagingSenderId: "555783281692",
  appId: "1:555783281692:web:98984e9f1e1f647371d3d9",
  measurementId: "G-Y5W9PLYP8F",
});

export const auth = getAuth(app);
export default app;
