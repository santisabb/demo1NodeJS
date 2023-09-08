import express, { json } from 'express'
import { recordsRouter } from './routes/album.js'
import { cors } from 'cors'

const app = express()
const port = process.env.PORT ?? 8081

app.disable('x-powered-by')
app.use(json())

app.use(cors({
  origin: (origin, callback) => {
    const ACCEPTED_ORIGINS = [
      'http://localhost:8081'
    ]
    if (ACCEPTED_ORIGINS.includes(origin)) {
      return callback(null, true)
    }

    if (!origin) {
      return callback(null, false)
    }

    return callback(new Error('Not allowed by CORS bro go fuck yourself'))
  }
}))

app.use('/album', recordsRouter)

app.listen(port, () => {
  console.log('server listening on port http://localhost:8081')
})
