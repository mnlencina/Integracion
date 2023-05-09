const express = require('express');
const routes = require('./routes');
const server = express();
const PORT = 3001;

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });
 
server.use(express.json())
 
server.use('/rickandmorty',routes)

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});


/* const http = require('http');
const characters = require('./utils/data')
const getCharById = require('./controllers/getCharById.js')
var cache = characters

http.createServer((req, res)=>{    
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
                    console.log(cache.length)
                    res.writeHead(200,{'Content-Type':'application/json'})                    
                    res.end(JSON.stringify(charac2))
                }else {
                    res.writeHead(200,{'Content-Type':'application/json'})
                    res.end(JSON.stringify({}))
                }
            })        
        }        
    }
}).listen(3001, 'localhost'); */
