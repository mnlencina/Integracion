const axios = require('axios')
const user = require('../utils/users')

const login = (req,res)=>{
    let {password, email} = req.query
    if(user[0].email === email && user[0].password === password) 
    res.json({access: true})
    else res.json({access: false})
}

module.exports = login