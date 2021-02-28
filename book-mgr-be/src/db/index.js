const mongoose=require('mongoose');
const UserSchema=new mongoose.Schema({
    nickname:String,
    password:String,
    age:Number,
});
const UserModal=mongoose.model('User',UserSchema);
const connect=()=>{
    //去连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/book-mgr');
//当数据库被打开的时候 做一些事情
mongoose.connection.on('open',()=>{
    console.log('连接成功');

   //创建文档
    const user=new UserModal({
        nickname:"小明",
        password:"123456",
        age:12,
    });

    //保存，同步到MongoDB
    user.save();
});
};

connect();