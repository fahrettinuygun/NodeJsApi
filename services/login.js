//const {firebase} = require('./database');
const firebase = require("firebase/app");
require("firebase/auth");


module.exports.signIn = async function(mail,password){
    return new Promise(resolve => {
        try {
            if(!mail){
                console.error('mail is required');
                resolve({success: false, message: 'Mail is required', data: null});
                return;
            }
            if(!password){
                console.error('password is required');
                resolve({success: false, message: 'Password is required', data: null});
                return;
            }
            firebase.auth().signInWithEmailAndPassword(mail, password)
            .then(response => {
                resolve({success: true, message: 'Login is success', data: response});
            })
            .catch(function(error) {
                console.error('login.js signIn firebase auth catch error: ',error);
                let errorCode = error.code;
                let errorMessage = error.message;
                resolve({success: false, message: error.message, data: error});
              });
        } catch (error) {
            console.error('login.js signIn catch error: ',error);
            resolve({success: false, message: error.message, data: error});
        }
    })
}