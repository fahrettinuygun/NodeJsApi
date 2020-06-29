//const firebase = require('firebase');
const db = require('../database');

module.exports.getProfileInfo = async function(userId){
    return new Promise(async resolve => {
        const docRef = db.collection("Tenants").doc("MAIN").collection("Doctors").doc(userId);
        //const docRef = db.collection("Users").doc(userId);
        await docRef.get().then(result => {
            resolve({success: true, message: 'get profile is success', data: JSON.stringify(result.data())});
        }).catch(error => {
            resolve({success: false, message: error, data: null});
        });
    })
}