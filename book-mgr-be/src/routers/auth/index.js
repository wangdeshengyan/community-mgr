const Router=require('@koa/router');

const router=new Router({
prefix:'/auth',
});

router.get('/register',async(ctx)=>{
ctx.body='注册成功';
});

module.exports=router;