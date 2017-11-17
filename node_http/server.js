const http = require('http');
const url = require('url');
const io = require('socket.io');
const mysql = require('mysql');
const fs = require('fs');

// 数据库连接(数据池，可设置max)
let db = mysql.createPool({ host: 'localhost', user: 'root', password: 'root', database: 'websocket' });

// 1.http服务器
let httpServer = http.createServer((req, res) => {
   let { pathname, query } = url.parse(req.url, true);
   if (pathname == '/reg') {  //------注册调用接口
      let { user, pass } = query;
      // 1.校验数据
      if (!/^\w{6,32}$/.test(user)) {
         res.write(JSON.stringify({ code: 1, msg: '用户名不符合规范' }))
         res.end();
      } else if (!/^.{6,32}$/.test(pass)) {
         res.write(JSON.stringify({ code: 1, msg: '密码不符合规范' }))
         res.end();
      } else {
         //1.检查用户名是否重复
         db.query(`select * from user_table where username='${user}'`, (err, data) => {
            if (err) {
               res.write(JSON.stringify({ code: 1, msg: '数据库有错误' }))
               res.end();
            } else if (data.length > 0) {
               res.write(JSON.stringify({ code: 1, msg: '用户名已存在' }))
               res.end();
            } else {
               db.query(`INSERT INTO user_table (username,password,online) VALUES('${user}','${pass}',0)`, err => {
                  if (err) {
                     res.write(JSON.stringify({ code: 1, msg: '数据库有错' }))
                     res.end();
                  } else {
                     res.write(JSON.stringify({ code: 0, msg: "注册成功" }))
                     res.end();
                  }
               })
            }
         })
      }
   } else if (pathname == '/login') {  //----登录调用接口
   	let {user,pass}=query;
   	// 1.校验数据
   	if(!/^\w{6,32}$/.test(user)){
   		res.write(JSON.stringify({code:1,msg:'用户名不符合规范'}))
   		res.end();
   	}else if(!/^.{6,32}$/.test(pass)){
   		res.write(JSON.stringify({code:1,msg:'密码不符合规范'}))
   		res.end();
   	}else{
   		//1.检查用户名是否存在
   		db.query(`SELECT ID,password FROM user_table WHERE username='${user}'`,(err,data)=>{
   			if(err){
   				res.write(JSON.stringify({code:1,msg:'数据库有错'}))
   				res.end();
   			}else if(data.length==0){
   				res.write(JSON.stringify({code:1,msg:'用户名不存在'}))
   				res.end();
   			}else if(data[0].password!=pass){
   				res.write(JSON.stringify({code:1,msg:'账号或密码错误'}))
   				res.end();
   			}else{
   				//-更改登录用户的online状态
   				db.query(`UPDATE user_table SET online=1 WHERE ID=${data[0].ID}`,err=>{
   					if(err){
   						res.write(JSON.stringify({code:1,msg:'数据库有错'}))
   						res.end();
   					}else{
   						res.write(JSON.stringify({code:0,msg:'登陆成功'}))
   						res.end();
   					}
   				})
   			}
   		})

   	} 
   } else {
      fs.readFile(`www${pathname}`, (err, data) => {
         if (err) {
            res.writeHeader(404);
            res.write('Not Found');
         } else {
            res.write(data);
         }
         res.end();
      });
   }

})
httpServer.listen(8080);