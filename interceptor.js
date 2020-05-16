const fs = require('fs');
const path = require('path');

const FAVICON = path.join(__dirname,'favicon.png');

interceptor = async function(req,res){
    try {
        // tarayıcılar otomatik olarak icon requesti atıyor
        if(req.url == '/favicon.ico'){
            res.setHeader('Content-Type', 'image/x-icon');
            return await fs.createReadStream(FAVICON).pipe(res);
        }
        return;
    } catch (error) {
        console.error('interceptor error: ', error);
    }

}

module.exports = interceptor;