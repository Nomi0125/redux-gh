import  firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

  var firebaseConfig = {
    apiKey: "AIzaSyBJJn1FHxgwNamthehgOkqKAlfirxOn2yw",
    authDomain: "web-and-mobile-hybrid-3dbe7.firebaseapp.com",
    projectId: "web-and-mobile-hybrid-3dbe7",
    storageBucket: "web-and-mobile-hybrid-3dbe7.appspot.com",
    messagingSenderId: "117446315197",
    appId: "1:117446315197:web:c6d7fde129faa42ab57bd4",
    measurementId: "G-ECVJPB4XRH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase;