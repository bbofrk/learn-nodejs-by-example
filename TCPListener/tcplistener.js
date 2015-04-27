var net = require('net');
var client_ctr = 0;
var server = net.createServer(function(socket){
  client_ctr++;
  console.log("Client "+ client_ctr + " connected");
  socket.on('data', function(data){
    if (String(data).trim() == 'disconnect') {
      socket.end();
    }
  });
  socket.on('end', function(){
    console.log('client disconnected');
  });
  socket.write("connected to server.\r\n");
  socket.pipe(socket);
});

server.listen(8080, "127.0.0.1");
