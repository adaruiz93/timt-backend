const express = require('express')
require('./db/db')
const timtController = require('./controllers/timt.js')

const app = express ()
const PORT = process.env.PORT || 9000

app.use(express.json())
app.use('/timt', timtController)



app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})