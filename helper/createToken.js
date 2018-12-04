const jwt = require('jsonwebtoken');

//it create  token taking user.id info .
const createToken = ( user )=>{
    const token = jwt.sign({id:user._id},'secretkey',{
        expiresIn:86400
    });
    return token;
}

module.exports={
    createToken
};