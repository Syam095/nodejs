const http = require('http');
const fs = require('fs');

http.createServer((req, res) =>{
    res.writeHead(200, {'Content-type': 'text/html'});
    if(req.url === '/login/home'){
        let data = fs.readFileSync('static/index.html');
        res.write(data);
    }
    else if(req.url === '/login' || req.url==='/'){
        let data = fs.readFileSync('static/login.html');
        res.write(data);

    }

    else{
        let data = fs.readFileSync('static/error.html');
        res.write(data);
    }
    //res.write("Hello world");
    res.end();
}).listen(process.env.PORT, () => console.log("The server is started"));