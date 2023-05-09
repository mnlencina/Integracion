const axios = require('axios')
const characters = require('../utils/data')
let cache = characters

const getCharById = async (req, res)=>{
    const {id} = req.params
    console.log(id)    
    let charac = cache.find(char => char.id === +id)
    if(charac){
        res.json(charac)
    }else{
        let url = `https://rickandmortyapi.com/api/character/${id}`;        
        let {data} = await axios.get(url)
        try {
            if(data.name){
                let {id, name, gender, species, origin, image, status}= data
                let charObj = {id, name, gender ,species, origin, image, status}
                cache = [...cache, charObj]
                res.json(charObj)
            }            
        } catch (error) {
            res.status(500).send(error.message)
        }    
    }   
}    

module.exports = getCharById