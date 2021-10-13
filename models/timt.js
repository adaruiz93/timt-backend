const mongoose = require('mongoose')

const timtSchema = mongoose.Schema({
  mood: {
    type: String,
    required: true
  },
  comment: {
    type: String
  }
}, {timestamp: true})

module.exports = mongoose.model('Timt', timtSchema)