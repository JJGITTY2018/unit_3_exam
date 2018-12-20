const express = require('express')
const router = express.Router()

const {
  getAllHabitats,
  getSingleInfo,
  addHabitatCat
} = require('../db_query/habitatsQ.js')


router.get('/', getAllHabitats)
router.get('/:id', getSingleInfo)
router.post('/', addHabitatCat)


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


