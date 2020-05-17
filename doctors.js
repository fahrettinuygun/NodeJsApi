const db = require('./database');

module.exports.getDoctor = async function(id){
    try {
        if(!id){
            console.log('id is required');
            return;
        }
        const docRef = db.doc('Users/'+id);
        const a = await docRef.get();
        return JSON.stringify(a.data());
    } catch (error) {
        console.log('firebase error', error);
    }
}

module.exports.postDoctor = async function(){
    console.log("postDoctor");
    return "postDoctor";
}

module.exports.deleteDoctor = async function(){
    console.log("deleteDoctor");
    return "deleteDoctor";
}
