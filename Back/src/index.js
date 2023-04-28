const http = require('http');
const characters = require('./utils/data')
const getCharById = require('./controllers/getCharById.js')
var cache = characters

http.createServer((req, res)=>{
    console.log(cache.length)
    res.setHeader('Access-Control-Allow-Origin', '*');    
    if (req.url.includes('/rickandmorty/character/')){
        let id = req.url.split('/').pop();
        const charac = cache.find(char => char.id === +id)
        if (charac){
            console.log('TOMA CACHE')
            res.writeHead(200,{'Content-Type':'application/json'})
            res.end(JSON.stringify(charac))
        }else{
            getCharById(id)
            .then((charac2)=>{
                if (charac2){
                    console.log('TOMA WEB API')
                    cache = [...cache, charac2]
                    res.writeHead(200,{'Content-Type':'application/json'})                    
                    res.end(JSON.stringify(charac2))
                }else {
                    res.writeHead(200,{'Content-Type':'application/json'})
                    res.end(JSON.stringify({}))
                }
            })
        
        }
        
        
    }
}).listen(3001, 'localhost');

