const express = require('express')
const cors = require('cors')
require('./db/db')
const timtController = require('./controllers/timt.js')

const app = express ()
const PORT = process.env.PORT || 9000

const whitelist = ["http://localhost:3000"]
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
}

app.use(cors(corsOptions))
app.use(express.json())
app.use('/timt', timtController)

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})