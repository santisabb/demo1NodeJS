const express = require('express')
const app = express()
const port = process.env.PORT ?? 8081
const pokes = require('./pokemones.js')

app.disable('x-powered-by')

app.get('/pokemones', (req, res) => {
  res.json(pokes)
})

app.post('/pokemon', (req, res) => {
  let body = ''

  req.on('data', chunk => {
    body += chunk
  })

  req.on('end', () => {
    const data = JSON.parse(body)
    res.status(200).json(data)
  })
})

app.use((req, res) => {
  res.status(404).send('<h1>404 not founLA CONCHA DE LA LORA</h1>')
})

app.listen(port, () => {
  console.log('server listening on port http://localhost:8081')
})
