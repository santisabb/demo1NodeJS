const http = require('node:http')

const processRequest = (req, res) => {
  const { method, url } = req
  switch (method) {
    case 'GET':
      switch (url) {
        case '/pokemon/ditto':
          res.setHeader('Content-Type', 'application/json; charset=utf-8')
          return res.end('puto el que lee')
        default:
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          return res.end('<h1>404 not found bro :,(</h1>')
      }
  }
}

const server = http.createServer(processRequest)

server.listen(8081, () => {
  console.log('server listening on port http://localhost:8081')
})
