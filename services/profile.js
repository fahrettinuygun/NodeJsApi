//const firebase = require('firebase');
const db = require('../database');

module.exports.getProfileInfo = async function(userId){
    return new Promise(async resolve => {
        const docRef = db.doc('Users/'+userId);
        const profile = await docRef.get();
        resolve({success: true, message: 'get profile is success', data: JSON.stringify(profile.data())});
    })
}