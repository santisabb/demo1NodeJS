const express = require('express')
const rcrds = require('./records.json')
const app = express()
const z = require('zod')
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
  const {
    name,
    artist,
    yearOut,
    numberSongs,
    timePlay
  } = req.body

  const newAlbum = {
    name,
    artist,
    yearOut,
    numberSongs,
    timePlay
  }
})

app.listen(port, () => {
  console.log('server listening on port http://localhost:8081')
})
