import 'dotenv/config'
import './bot.js'
import express from 'express'

const app = express()
app.get('/', (_, res) => res.send('OPENDai is running 🤖'))

app.listen(3000, () =>
  console.log('OPENDai server started on http://localhost:3000')
)
