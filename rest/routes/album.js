import { Router } from 'express'
import { validateAlbum, validatePartialAlbum } from '../schemas/album.js'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const rcrds = require('./records.json')

export const recordsRouter = Router()

recordsRouter.get('/', (req, res) => {
  const { artist } = req.query
  if (artist) {
    const filteredRec = rcrds.filter(
      record => record.artist.some(n => n.toLowerCase() === artist.toLowerCase())
    )
    return res.json(filteredRec)
  }
  res.json(rcrds)
})

recordsRouter.get('/:name', (req, res) => {
  const { name } = req.params
  const record = rcrds.find(record => record.name === name)
  if (record) res.json(record)

  res.status(404).json({ message: 'Not found that name bro' })
})

recordsRouter.post('/', (req, res) => {
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

recordsRouter.patch('/:name', (req, res) => {
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
