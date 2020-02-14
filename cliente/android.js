var http = require('http');

var bufferBody = [];
/*
var opcoes = {
    hostname: 'localhost',
    port: 80,
    path: '/',
    headers: {
        'Accept': 'text/html'
    }
};*/

var opcoes = {
    hostname: 'localhost',
    port: 80,
    path: '/teste',
    method: 'get',
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
    }
};

//content-type
/*
var html = 'nome=josé'; //x-www-form-urlencoded
var json  = {
    nome: 'josé'
};
*/
var req = http.request(opcoes, (res) => {

    res.on('data', (part) => {
        bufferBody.push(part);
    });

    res.on('end', () => {
        var bodyResponse =  Buffer.concat(bufferBody).toString();
        console.log(bodyResponse);
    });

    res.on('error', () => {

    });

});

//req.write(html);
//req.write(JSON.stringify(json));
req.end();

/*
http.get(opcoes, (res) => {

    res.on('data', (part) => {
        bufferBody.push(part);
    });

    res.on('end', () => {
        var bodyResponse =  Buffer.concat(bufferBody).toString();
        console.log(bodyResponse);
    });

    res.on('error', () => {

    });


});*/