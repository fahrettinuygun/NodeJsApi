//const firebase = require('firebase');
const db = require('../database');

let meetingList = [];
module.exports.getMeetings = async function(userId){
    userId = "Fi8s7byPrtetOhIeRgIBDwLTp063";
    return new Promise(async resolve => {
        //const docRef = db.doc("Tenants/MAIN/Appointments/" + userId); //
        const docRef = db.collection("Tenants").doc("MAIN").collection("Appointments").where("doctorId","==",userId);
        await docRef.get().then(result => {
            result.docs.forEach((i,index) => {
                meetingList.push({
                    doctorBranch: i.data().doctorBranch,
                    userId: i.data().userId,
                    doctorImageURL: i.data().doctorImageURL,
                    appointmentDate: i.data().appointmentDate.toDate(),
                    permission: i.data().permission,
                    userName: i.data().userName,
                    doctorAddress: i.data().doctorAddress,
                    isDone: i.data().isDone,
                    doctorName: i.data().doctorName,
                    doctorId: i.data().doctorId,
                    price: i.data().price
                });
            });
            console.log("meeting list",JSON.stringify(meetingList));
            resolve({success: true, message: 'get meetings is success', data: JSON.stringify(meetingList)});
        }).catch(error => {
            console.log("meetings error: ", error);
            resolve({success: false, message: error, data: null});
        }).finally(() => {
            meetingList = [];
        });
    })  
}