const db = require('./database');

module.exports.signIn = async function(mail,password){
    debugger;
    try {
        if(!mail){
            console.log('mail is required');
            return;
        }
        if(!password){
            console.log('password is required');
            return;
        }
        return true;
    } catch (error) {
        console.log('firebase error', error);
    }
}
