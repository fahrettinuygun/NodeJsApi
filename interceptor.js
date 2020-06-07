const fs = require('fs');
const path = require('path');
const doctors = require('./doctors');
const login = require('./login');
const express = require('express');
const router = express.Router();
const FAVICON = path.join(__dirname,'favicon.png');

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
        console.error('interceptor error:', error);
        console.error('interceptor error:', req.url);
    }
})

router.route('/login').get(async function(req,res){
    console.log(JSON.stringify(req.query));
    res.send(await login.signIn(req.query.mail, req.query.password));
})
router.route('/login').post(async function(req,res){
    res.send(await login.signIn(req.query.mail, req.query.password));
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