const express = require('express')
const rcrds = require('./records.json')
const app = express()
const z = require('zod')
const { validateAlbum } = require('./album.js')
const port = process.env.PORT ?? 8081

app.disable('x-powered-by')

app.get('/records', (req, res) => {
  const { artist } = req.query
  if (artist) {
    const filteredRec = rcrds.filter(
      record => record.artist.some(n => n.toLowerCase() === artist.toLowerCase())
    )
    return res.json(filteredRec)
  }
  res.json(rcrds)
})

app.get('/records/:name', (req, res) => {
  const { name } = req.params
  const record = rcrds.find(record => record.name === name)
  if (record) res.json(record)

  res.status(404).json({ message: 'Not found that name bro' })
})

app.post('/records', (req, res) => {
  const result = validateAlbum(req.body)

  if (result.error) {
    return res.status(400).json({ error: result.error.message })
  }

  const newAlbum = {
    ...result.data
  }

  rcrds.push(newAlbum)

  res.status(201).json(newAlbum)
})

app.listen(port, () => {
  console.log('server listening on port http://localhost:8081')
})
