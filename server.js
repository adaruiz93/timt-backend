require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./db/db')
const timtController = require('./controllers/timt.js')

const app = express ()
const PORT = process.env.PORT || 9000

const whiteList = ['http://localhost:3000', "https://timt.herokuapp.com/"]
const corsOptions = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin) || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions))
app.use(express.json())
app.use('/timt', timtController)

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})