const interceptor = require('./interceptor');
const express = require('express');
const app = express();

const port = '7000';

app.use(interceptor);

app.listen(port, error => {
    if(error){
        console.error('server.js error: ', error);
    }
    else{
        console.log('Started NodeJsApi on port '+port);
    }
});