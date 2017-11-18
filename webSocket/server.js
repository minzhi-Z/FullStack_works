const http=require('http');
const io=require('socket.io');
const mysql=require('mysql');
const fs=require('fs');

//----创建数据库连接池
let db=mysql.createPool({host:'localhost',user:'root',password:'root',database:'websocket'})

// 1.http服务器
let httpServer=http.createServer((req,res)=>{
	fs.readFile(`www${req.url}`,(err,data)=>{
		if(err){
			res.writeHeader(404);
			res.write('No Found');
		}else{
			res.write(data);
		}
		res.end();
	})
})
httpServer.listen(8080);

// 2.基于http服务器的websocket服务器;
let wsServer=io.listen(httpServer);
wsServer.on("connection",sock=>{
	//----------注册_start
	sock.on('reg',(user,pass)=>{ 
		if(!/^\w{6,32}$/.test(user)){
			sock.emit('reg_res',1,'用户名不符合规范');
		}else if(!/^.{6,32}$/.test(pass)){
			sock.emit('reg_res',1,'密码不符合规范');
		}else{
			db.query(`SELECT ID FROM user_table WHERE username='${user}'`,(err,data)=>{
				if(err){
					sock.emit('reg_res',1,'数据库有错')
				}else if(data.length>0){
					sock.emit('reg_res',1,'用户名已存在')
				}else{
					db.query(`INSERT INTO user_table (username,password,online) VALUES('${user}','${pass}',0)`,err=>{
						if(err){
							sock.emit('reg_res',1,'数据库有错')
						}else{
							sock.emit('reg_res',0,'注册成功')
						}
					})
				}
			})
		}
	})   
	//------------登录_start
	sock.on('login',(user,pass)=>{
		if(!/^\w{6,32}$/.test(user)){
			sock.emit('login_res',1,'用户名不符合规范')
		}else if(!/^.{6,32}$/.test(pass)){
			sock.emit('login_res',1,'密码不符合规范')
		}else{
			 db.query(`SELECT ID,password FROM user_table WHERE username='${user}'`,(err,data)=>{
			 	if(err){
			 		sock.emit('login_res',1,'数据库有错')
			 	}else if(data.length==0){
			 		sock.emit('login_res',1,'用户名不存在')
			 	}else if(data[0].password!=pass){
			 		sock.emit('login_res',1,'用户名或密码错误')
			 	}else{
			 		sock.emit('login_res',0,'登录成功')
			 	}
			 })
		}

	})



	


})
