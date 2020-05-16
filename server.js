const interceptor = require('./interceptor');
const doctors = require('./doctors');
const express = require('express');
const app = express();

const port = '7000';

app.use(async function(req, res, next) {
    let result = await interceptor(req,res);
    if(result){
        res.send(result);
        return;
    }
    next();
  });

app.get('/*', async function(req, res) {
    result = await doctors();
    res.send(result);
})

app.post('/*', async function(req, res) {
    result = await doctors();
    res.send(result);
})

app.delete('/*', async function(req, res) {
    result = await doctors();
    res.send(result);
})

app.listen(port);