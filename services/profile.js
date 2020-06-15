//const firebase = require('firebase');
const db = require('../database');

module.exports.getProfileInfo = async function(userId){
    return new Promise(async resolve => {
        const docRef = db.doc('Users/'+userId);
        await docRef.get().then(result => {
            resolve({success: true, message: 'get profile is success', data: JSON.stringify(result.data())});
        }).catch(error => {
            resolve({success: false, message: error, data: null});
        });
    })
}