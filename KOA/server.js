const koa=require('koa');
const body=require('koa-better-body');
const convert=require('koa-convert');

let server=new koa();
server.listen(8888);

server.use(convert(body({
   uploadDir:'./upload',  // 上传文件的路径
   keepExtensions: true   // 是否保留扩展名(一般不用，服务器不认)
})));

server.use(async ctx=>{
   // console.log('body:',ctx.request.body)   //buffer
   // console.log('files:',ctx.request.files)   //文件
   console.log('fields:',ctx.request.fields)  //数据(包含文件)
})