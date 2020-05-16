const db = require('./database');

getDoctor = async function(){
    try {
        const docRef = db.doc('Users/vK0Wf0qitHVGG6Gpb33T61wQ1Py2');
        const a = await docRef.get();
        return JSON.stringify(a.data().phone);
    } catch (error) {
        console.log('firebase error', error);
    }
}

postDoctor = async function(){
    console.log("postDoctor");
    return "postDoctor";
}

deleteDoctor = async function(){
    console.log("deleteDoctor");
    return "deleteDoctor";
}

const doctors = {
    getDoctor: this.getDoctor,
    postDoctor: this.postDoctor,
    deleteDoctor: this.deleteDoctor
}

module.exports = getDoctor;
