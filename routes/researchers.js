const express = require('express')
const router = express.Router()

const {
  getAllStaff,
  getSingleInfo,
  deleteResearcher,
  addResearcher,
  editResearcher
} = require('../db_query/researchersQ.js')

//ROUTERS >> FUNCTIONS
router.get('/', getAllStaff)
router.get('/:id',getSingleInfo)
router.delete('/:id', deleteResearcher)
router.post('/', addResearcher)
router.patch('/:id', editResearcher)


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