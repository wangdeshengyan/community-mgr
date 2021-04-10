var jwt = require('jsonwebtoken');
var token = jwt.sign({ 
    account: 'a.cc.com',
    _id:'123',
}, 
    'aaa');

console.log(token);


//header
//加密的算法，sha256


//payload


//signature
//签证相关

jwt.verify(token,'aaa',(err,payload)=>{
console.log(err,payload);
});