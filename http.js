const http = require('node:http')

const server = http.createServer((req, res) => {
  console.log('reques recived')
  res.end('hoooliiis')
})

server.listen(3030, () => {
  console.log('server listening on http://localhost:3030')
})

/*
hack para evitar colisionar puertos
server.listen(0, () => {
    console.log(`server listening on http://localhost:${server.address().port}`)
})
poniendo 0 eligira el primer puerto disponible
*/
