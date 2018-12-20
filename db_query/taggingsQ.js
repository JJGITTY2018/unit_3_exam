const db = require('../db/db_route.js').db

//GET ALL
const getAlltags = (req, res, next) => {
  db.any('SELECT * FROM taggings').then((table) => {
    res.status(200).json({
      status: 200,
      message: "success @ GET",
      data: table
    })
  }).catch(err => {
    res.json({
      status: 404,
      message: err.message
    })
  })
}

//GET SINGLE INFO ON TAGGING
const getSingleInfo = (req, res, next) => {
  db.one('SELECT * from taggings WHERE id = ${params}', {
      params: req.params.id
    })
    .then((table) => {
      res.status(200).json({
        status: 200,
        message: 'success @ Get Single Info',
        data: table
      })
    }).catch(err => {
      res.json({
        status: 404,
        message: err.message
      })
    })
}

//Get all taggings performed by a specific researcher.
const getTagsByResearchers = (req, res, next) => {
  db.any('SELECT * from taggings WHERE researcher_id = ${params}', {
      params: req.params.id
    })
    .then((table) => {
      res.status(200).json({
        status: 200,
        message: 'success - all tags by researchers',
        data: table
      })
    }).catch(err => {
      res.json({
        status: 404,
        message: err.message
      })
    })
}


//Get all taggings performed by a specific researcher.
const getTagsbyAnimals = (req, res, next) => {
  db.any('SELECT * from taggings WHERE animal_id = ${params}', {
      params: req.params.id
    })
    .then((table) => {
      res.status(200).json({
        status: 200,
        message: 'success - all tags by animals',
        data: table
      })
    }).catch(err => {
      res.json({
        status: 404,
        message: err.message
      })
    })
}


//Pin the animals by a researcher
const pinAtag = (req, res, next) => {
  db.none("INSERT INTO taggings(animal_id, researcher_id) VALUES (${animal_id}, ${researcher_id})", req.body)
    .then(() => {
      res.status(200).json({
        status: 200,
        message: 'Added a tagggged'
      })
    }).catch(err => {
      return next(err)
    })
}
module.exports = {
  getAlltags,
  getSingleInfo,
  getTagsByResearchers,
  getTagsbyAnimals,
  pinAtag
}