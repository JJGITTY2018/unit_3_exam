const express = require('express')
const router = express.Router()

const {
  getAllSpecies,
  getSingleInfo,
  addSpecies
} = require('../db_query/speciesQ.js')
router.get('/', getAllSpecies)
router.get('/:id', getSingleInfo)
router.post('/', addSpecies)


//error path
router.get('/*', (req, res, next) => {
  res.json({
    status: 404,
    message: 'Error'
  })
})

router.delete('/*', (req, res, next) => {
  res.json({
    status: 404,
    message: 'Error'
  })
})
router.patch('/*', (req, res, next) => {
  res.json({
    status: 404,
    message: 'Error'
  })
})

router.post('/*', (req, res, next) => {
  res.json({
    status: 404,
    message: 'Error'
  })
})
module.exports = router