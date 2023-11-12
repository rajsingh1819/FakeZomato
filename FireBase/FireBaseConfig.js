
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA73sr6dSB0ieBwfXFGCc8_t-916KIVRKQ",
    authDomain: "test-c89ff.firebaseapp.com",
    projectId: "test-c89ff",
    storageBucket: "test-c89ff.appspot.com",
    messagingSenderId: "99756934160",
    appId: "1:99756934160:web:6cb26fb19d152836e83695",
    measurementId: "G-QN9TVVZHEZ"
};


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}



export { firebase };