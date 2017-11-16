const mysql=require("mysql");

// 1.创建一个单一数据库链接
// let db = mysql.createConnection({host:"localhost",user:"root",password:"root",database:"mysql"})
// 1.2 创建连接池
let dbs = mysql.createPool({host:"localhost",user:"root",password:"root",database:"20171113"})

// 2.查询
dbs.query("select * from user_table",(err,data)=>{
	if(err){
		console.log(err)
	}else{
		console.log(data)
	}
}) 