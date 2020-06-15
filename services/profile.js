const firebase = require('firebase');

module.exports.getProfileInfo = async function(userId){
    return new Promise(resolve => {
        firebase.database().ref('/Users/' + userId).once('value').then(function(result) {
            resolve(result);
          }).catch(error => {
              console.error('getProfileInfo Firebase Catch Error: ',error);
              resolve(error);
          });

    })
}