const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema({
   account:String,
   password:String,
    
});