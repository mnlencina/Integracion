const http = require('http');
const characters = require('./utils/data')

http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    if (req.url.includes('/rickandmorty/character/')){
        let id = req.url.split('/').pop();
        const charac = characters.find(char => char.id === +id)
        if (charac){
            res.writeHead(200,{'Content-Type':'application/json'})
            res.end(JSON.stringify(charac))
        }else {
            res.writeHead(200,{'Content-Type':'application/json'})
            res.end(JSON.stringify({}))
        }
    }
}).listen(3001, 'localhost');

