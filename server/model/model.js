const mongoose=require('mongoose');

var schema=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    gender:String,
    status:String
})
const userDB=mongoose.model('userdb',schema);

module.exports=userDB;