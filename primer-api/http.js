const http = require('node:http')

const desiredPort = process.env.PORT ?? 8081

const processRequest = (req, res) => {
  if (req.url === '/') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html; Charset=utf-8')
    res.end('<h1>Hoolis esta es mi páginaa <3</h1>')
    console.log('request receveid: ', req.url)
  } else if (req.url === '/contacts') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html; Charset=utf-8')
    res.end('<h1>Aca estan los contactosss <3</h1>')
  } else {
    res.statusCode = 404
    res.setHeader('Content-Type', 'text/html; Charset=utf-8')
    res.end('<h1>404 es NOT FOUND :( </3</h1>')
  }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`server listening on port http://localhost:${desiredPort}`)
})
