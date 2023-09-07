import express, { json } from 'express'
import { createRequire } from 'node:module'
import { validateAlbum, validatePartialAlbum } from './album.js'
const require = createRequire(import.meta.url)
const rcrds = require('./records.json')
const app = express()
const port = process.env.PORT ?? 8081

app.disable('x-powered-by')
app.use(json())

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

  if (!result.success) {
    return res.status(400).json({ error: JSON.parse(result.error.message) })
  }

  const newAlbum = {
    ...result.data
  }

  rcrds.push(newAlbum)

  res.status(201).json(newAlbum)
})

app.patch('/records/:name', (req, res) => {
  const result = validatePartialAlbum(req.body)

  if (!result.success) {
    return res.status(400).json({ error: JSON.parse(result.error.message) })
  }

  const { name } = req.params
  const albumIndex = rcrds.findIndex(a => a.name === name)

  if (albumIndex === -1) {
    return res.status(404).json({ message: 'Album not found :(' })
  }

  const updateRecord = {
    ...rcrds[albumIndex],
    ...result.data
  }

  rcrds[albumIndex] = updateRecord

  return res.json(updateRecord)
})

app.listen(port, () => {
  console.log('server listening on port http://localhost:8081')
})
