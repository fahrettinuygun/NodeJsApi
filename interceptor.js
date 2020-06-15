const fs = require('fs');
const path = require('path');
const url = require('url');
const doctors = require('./doctors');
const login = require('./services/login');
const profile = require('./services/profile');
const express = require('express');
const router = express.Router();
const FAVICON = path.join(__dirname,'favicon.png');
const firebase = require('firebase');

const firebaseConfig = {
    apiKey: "AIzaSyAV0oz_CHH7LqntM5KTZIKfqMn5kCXvCPU",
    authDomain: "findmydoctorapp.firebaseapp.com",
    databaseURL: "https://findmydoctorapp.firebaseio.com",
    projectId: "findmydoctorapp",
    storageBucket: "findmydoctorapp.appspot.com",
    messagingSenderId: "1825891191",
    appId: "1:1825891191:web:c4da7bb9a94de2b1bdf772"
  };

  firebase.initializeApp(firebaseConfig)

router.use(async function(req,res,next){
    try {
        // tarayıcılar otomatik olarak icon requesti atıyor
        if(req.url == '/favicon.ico'){
            res.setHeader('Content-Type', 'image/x-icon');
            icon = fs.readFileSync(FAVICON);
            res.send(icon);
        }
        else{
            next();
        }
    } catch (error) {
        console.error('interceptor error: ', error);
        console.error('interceptor error, Request URL: ', req.url);
    }
})

router.route('/login').get(async function(req,res){
    const queryObject = url.parse(req.url,true).query;
    console.log('Login Request: Mail: ' +queryObject.mail +' , '+'Password: ' + queryObject.password);
    let result = await login.signIn(queryObject.mail, queryObject.password);
    console.log('Login Result: ', result);
    res.send(result);
})

router.route('/profile').get(async function(req,res){
    const queryObject = url.parse(req.url,true).query;
    console.log('Profile Request: UserId: ' +queryObject.userId);
    let result = await profile.getProfileInfo(queryObject.userId);
    console.log('Login Result: ', result);
    res.send(result);
})


router.route('/doctor')
        .get(async function(req,res){
            // req.param('id')
            res.send(await doctors.getDoctor(req.query.id));
        })
        .post(async function(req,res){
            res.send(await doctors.postDoctor());
        })
        .delete(async function(req,res){
            res.send(await doctors.deleteDoctor());
        });

module.exports = router;