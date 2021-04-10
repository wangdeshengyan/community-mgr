const mongoose=require('mongoose');
const {getMate}=require('./helpers');
const InviteCodeSchema=new mongoose.Schema({
   code:String,
   //用来注册那个账户
   user:String,

mata:getMate(),
    
});


mongoose.model('InviteCode',InviteCodeSchema);