const express = require('express')
const router = express.Router()

const {
  getAllAnimals,
  getSingleInfo,
  deleteAnimal,
  addSpecies,
  editAnimal
} = require('../db_query/animalsQ.js')

router.get('/',getAllAnimals)
router.get('/:id', getSingleInfo)
router.delete('/:id', deleteAnimal)
router.post('/', addSpecies)
router.patch('/:id', editAnimal)


//error path
router.get('/*',(req,res,next)=>{
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