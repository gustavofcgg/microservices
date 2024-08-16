const http = require('http')
const app = require('../scr/app')
const port = parseInt(process.env.port,10) || 3000
const server  = http.createServer(app);


server.listen(port);
server.on('listening', onlistening)
console.log(`api inicializada na porta ${port}`)

function onlistening() {
    const addr =server.address()
    bind = typeof addr =='string'? 'pipe'+addr:'port'+addr.port;
    console.log('Listening on'+ bind)
}


