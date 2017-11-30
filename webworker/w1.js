this.onmessage=function(ev){
	//---3，子进程处理接收到的数据
	let sum=ev.data.n1+ev.data.n2
	//----4.处理结果返回给主进程
	this.postMessage(sum)
}