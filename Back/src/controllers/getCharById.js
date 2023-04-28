const axios = require('axios')

const getCharById =(id)=>{
    let url = `https://rickandmortyapi.com/api/character/${id}`;        
    return axios.get(url)
    .then(data=> {        
    let {id,name,gender,species,origin,image,status}= data.data
    let charObj = {
        id,
        name,
        gender,
        species,
        origin,
        image,
        status
    }
    return charObj
    })
    .catch(err=> console.log ('ERRRRROR!', err.data))    
}

module.exports = getCharById