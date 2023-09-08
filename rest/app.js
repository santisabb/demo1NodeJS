import express, { json } from 'express'
import { recordsRouter } from './routes/album.js'
import { corsMiddleware } from './middlewares/cors.js'

const app = express()
const port = process.env.PORT ?? 8081

app.disable('x-powered-by')
app.use(json())

app.use(corsMiddleware())

app.use('/album', recordsRouter)

app.listen(port, () => {
  console.log('server listening on port http://localhost:8081')
})
