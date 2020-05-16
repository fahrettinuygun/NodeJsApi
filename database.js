const admin = require('firebase-admin');
const serviceAccount = require('./firebase-connection-info.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

module.exports = db;