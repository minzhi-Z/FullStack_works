const koa=require('koa');

let server=new koa();
server.listen(8888);

// server.keys=['gdfgdfe','gdfgerr66','898fdgdfdfg'];

server.use(async ctx=>{

   ctx.cookies.set('user','zhuminzhi',{maxAge: 24*3600*1000})
})