const express = require('express')
const router = express.Router()

const {
  getAlltags,
  getSingleInfo,
  getTagsByResearchers,
  getTagsbyAnimals,
  pinAtag
} = require('../db_query/taggingsQ.js')

router.get('/', getAlltags)
router.get('/:id', getSingleInfo),
router.get('/researchers/:id', getTagsByResearchers)
router.get('/animals/:id', getTagsbyAnimals)
router.post('/', pinAtag)



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