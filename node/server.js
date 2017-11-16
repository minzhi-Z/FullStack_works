const http = require("http");
const io = require("socket.io");

const httpServer = http.createServer();
httpServer.listen(8080);

const wsServer=io.listen(httpServer)
wsServer.on("connection",sock=>{
	sock.on("send",(msg)=>{
		console.log(msg)
		wsServer.on("connection",sock=>{
			sock.emit("receive",msg)
		})
	})
})