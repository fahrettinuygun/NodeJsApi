const admin = require('firebase-admin');
const serviceAccount = require('./firebase-connection-info.json');
const firebase = require("firebase/app");
require("firebase/auth")

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const firebaseConfig = {
    apiKey: "AIzaSyAV0oz_CHH7LqntM5KTZIKfqMn5kCXvCPU",
    authDomain: "findmydoctorapp.firebaseapp.com",
    databaseURL: "https://findmydoctorapp.firebaseio.com",
    projectId: "findmydoctorapp",
    storageBucket: "findmydoctorapp.appspot.com",
    messagingSenderId: "1825891191",
    appId: "1:1825891191:web:c4da7bb9a94de2b1bdf772"
  };

// firebase.initializeApp(firebaseConfig)
const db = admin.firestore();

module.exports = db,firebase;