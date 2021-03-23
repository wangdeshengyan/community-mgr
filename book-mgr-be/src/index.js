//每个文件都是一个模块
const Koa=require('koa');
const registerRoutes=require('./routers');

const app=new Koa();

registerRoutes(app);

//开启一个http服务
//接受http请求 并作处理，处理完后响应
app.listen(3000,()=>{
    console.log('启动成功');
});
