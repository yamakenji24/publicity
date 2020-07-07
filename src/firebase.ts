import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/firebase-storage';

var firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    databaseURL: process.env.DBURL,
    projectId: "publicity-71156",
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MSID,
    appId: process.env.APPID,
    measurementId: process.env.MEASUREMENTID
};
firebase.initializeApp(firebaseConfig);

export default firebase;