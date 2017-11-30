const express=require("express");

let server=express();
server.use(express.static('www'));
server.listen(8888)

server.post("/upload",function(req,res){
	console.log(req)
	res.send("success")
})