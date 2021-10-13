const express = require('express')
const router = express.Router()
const Timt = require('../models/timt')



// index route
router.get('/', async (req, res) => {
  try {
    const allTimt = await Timt.find()
    res.status(200).json(allTimt)
  } catch (error) {
    res.status(400).json({ error: error.message})
  }
 })
 
//create/post
router.post('/', async (req, res) => {
  try {
    const newTimt = await Timt.create(req.body)
    res.status(200).json(newTimt)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
 })
 



module.exports = router