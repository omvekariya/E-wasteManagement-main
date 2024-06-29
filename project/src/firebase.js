import firebase from 'firebase/app'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyCuVreszJZzwXVhzbG9ULRTujg-hLHHVjM",
  authDomain: "ewaste-9483d.firebaseapp.com",
  projectId: "ewaste-9483d",
  storageBucket: "ewaste-9483d.appspot.com",
  messagingSenderId: "47741137387",
  appId: "1:47741137387:web:871090f9ce0727006e29ae"
  // measurementId: "G-BDH1GED4RC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase