import express from 'express'
import { connectDB } from './db'

const PORT = process.env.PORT || 8000

const app = express()
app.use(express.json())

app.get('/', (req, res) => res.send({ message: 'OctoFit Tracker API' }))

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Backend listening on http://localhost:${PORT}`)
  })
}).catch(err => {
  console.error('Failed to connect to DB', err)
  process.exit(1)
})
