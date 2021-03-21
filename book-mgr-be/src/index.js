const koa=require('koa');


const app=new koa();
//通过app.use注册中间件
//中间件本质上 他就是一个函数
//context ,上下文
app.use((context)=>{
const { request:req} =context;
const{ url}=req;

//路由
if(url ==='/'){
    context.body='<h1>主页</h1>';
    return ;
}
if(url ==='/user/list'){
    //访问数据库
    context.body='<h1>用户列表</h1>';
    return ;
}
context.body='404';
context.status='404';

});
//开启一个http服务
//接受http请求 并作处理，处理完后响应
app.listen(3000,()=>{
    console.log('启动成功');
});

console.log('112233');