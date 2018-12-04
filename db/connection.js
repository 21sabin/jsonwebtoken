const mongoose  =require('mongoose');

mongoose.connect('mongodb://sabin:chatcat21@ds043457.mlab.com:43457/chatapp', { useNewUrlParser: true });
const db =mongoose.connection
db.on('error',(err)=>console.log("error in connecting"));
db.on('connected',()=>console.log("successfully conneced to mongodb"));

module.exports = mongoose;