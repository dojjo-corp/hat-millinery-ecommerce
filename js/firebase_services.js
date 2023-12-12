// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDm8wlVeWFUIYi3Q8jYXLzRKzTXfcu0aX4",
  authDomain: "hat-millinery-ecommerce.firebaseapp.com",
  projectId: "hat-millinery-ecommerce",
  storageBucket: "hat-millinery-ecommerce.appspot.com",
  messagingSenderId: "332799480362",
  appId: "1:332799480362:web:98aa1b9c09211b283da953",
  measurementId: "G-WLDYFTZ8C4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
