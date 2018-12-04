
const jwt = require('jsonwebtoken');
const express =require('express')

const authGuard = ( req ,res ,next  ) =>{
    console.log(req.headers.authorization)
    jwt.verify( req.headers.authorization , 'secretkey' , ( err ,decode )=>{
        if(err){
            return res.json({
                message:"Authorizatin failed"
            })
        }
        next()
    })
}

module .exports ={authGuard}

