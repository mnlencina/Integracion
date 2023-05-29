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
/* const axios = require('axios');

const getCharById = async (req, res) =>{
    let { id } =  req.params;
    let url = `https://rickandmortyapi.com/api/character/${id}`
    // console.log('INSIDE ID', url);
    try {
        let response = await axios.get(url);
        //exitoso y encontro personaje
        if (response.data.name) {
            let { id, name, gender, species, origin, image, status  } = response.data
            let charObj = {
                id,
                name,
                gender,
                species,
                origin,
                image,
                status
            }
            res.status(200).json(charObj);
        }
        //exitoso pero no enocntro personaje
        else res.status(404).send('Not found.');
    } catch (error) {
        console.log('AXIOS ERROR', error);
        res.status(500).send(error.message);
    }
}

module.exports = getCharById */
