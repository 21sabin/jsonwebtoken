const router = require("express").Router();
const User = require('../model/user');
const helper = require('./../helper/createToken');
const middleware = require('../middleware/authMiddleware')

router.post("/", async (req, res) => {
   const user= await User.findOne({username:req.body.username});
   if(user.password == req.body.password){
       const token = helper.createToken( user );
       res.json({
           token
       })
   }
});

router.get('/users',middleware.authGuard ,( req ,res )=>{
    console.log(req.headers,"heasder")
    User.find().then(result=>{
        res.json(result)
    })
})

router.post('/signup' ,( req,res)=>{
    const newUser = new User({
        username:req.body.username,
        password:req.body.password
    });
    console.log(newUser,"refkd")
    newUser.save((err)=>{
        if(err){
            return res.json({
                message:err
            })
        }
        res.json({
            obj:newUser
        })
    })
})

module.exports = router;
