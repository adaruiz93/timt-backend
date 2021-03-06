const express = require('express')
const router = express.Router()
const Timt = require('../models/timt')


//index route
router.get('/', async (req, res) => {
  try {
    const allTimt = await Timt.find()
    res.status(200).json(allTimt)
  } catch (err) {
    res.status(400).json({ error: err.message})
  }
 })
 
//show route
router.get('/:id', async (req, res) => {
  try {
    const findTimt = await Timt.findById(req.params.id)
    res.status(200).json(findTimt)
  } catch (err) {
    res.status(400).json({ error: err.message})
  }
 })
 
//create/post route
router.post('/', async (req, res) => {
  try {
    const newTimt = await Timt.create(req.body)
    res.status(200).json(newTimt)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
 })
 
 //delete route
router.delete('/:id', async (req, res) => {
  try {
    const deleteTimt = await Timt.findByIdAndDelete(req.params.id)
    res.status(200).json(deleteTimt)
  } catch(err) {
    res.status(400).json({ error: err.message })
  }
 })
 
 //update route
router.put('/:id', async (req, res) => {
  try {
    const updateTimt = await Timt.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updateTimt)
  } catch(err) {
    res.status(400).json({ error: err.message })
  }
 })
 
module.exports = router