let net=require('net');

let host='47.89.253.178';
let port=11500;

let client=new net.Socket();

client.connect(port,host,function(){
    let json={
                "type":"login",
                "sequence":1019,
                "argument":{
                "username":"13862007494",
                "password":"aa123456"
                }
            };

    client.write(`0x02${json}0x03`);
})

client.on('data',function(data){
    console.log(data)
    client.destroy();
})

client.on('close', function() {
    console.log('Connection closed');
});