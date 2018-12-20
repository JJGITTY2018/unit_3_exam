const express = require('express')
const router = express.Router()

const {
  getAllSights,
  getSightBySpecies,
  getSightByResearchers,
  getSightByHabitat,
  deleteSighting,
  spotAnimal
} = require('../db_query/sightingsQ.js')

router.get('/', getAllSights)

router.get('/species/:id', getSightBySpecies)

router.get('/researchers/:id', getSightByResearchers)

router.get('/habitats/:id', getSightByHabitat)

router.delete('/:id', deleteSighting)

router.post('/', spotAnimal)




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