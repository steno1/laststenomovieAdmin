
import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyB_fDPuqBl5Xk8L21PN2xSjsP62zFW2UIM",
    authDomain: "movie-eb142.firebaseapp.com",
    projectId: "movie-eb142",
    storageBucket: "movie-eb142.appspot.com",
    messagingSenderId: "1072681911540",
    appId: "1:1072681911540:web:484a455735fb6613500aa1",
    measurementId: "G-XZ9VF9N3ZE"
  };
  
  firebase.initializeApp(firebaseConfig);
  const storage=firebase.storage();
  export default storage;