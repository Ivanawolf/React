import * as firebase from 'firebase/app';

import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyAktXhUzsTeEOqV9P6Z2Ber1S57-4Z8KEs",
    authDomain: "react-ivanawolf.firebaseapp.com",
    projectId: "react-ivanawolf",
    storageBucket: "react-ivanawolf.appspot.com",
    messagingSenderId: "819667705592",
    appId: "1:819667705592:web:f2b6510141959d9d87e50d",
    measurementId: "G-33QCEEBGJ9"
});

export function getFirebase() {
    return app;
}
export function getFirestore() {
    return firebase.firestore(app);
}


