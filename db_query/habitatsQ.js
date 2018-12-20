const db = require('../db/db_route.js').db

//GET ALL
const getAllHabitats = (req, res, next) => {
  db.any('SELECT * FROM habitats').then((table) => {
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

//Get Single Information about Habitats
const getSingleInfo = (req, res, next) => {
  db.one('SELECT * from habitats WHERE id = ${params}', {
      params: req.params.id
    })
    .then((table) => {
      res.status(200).json({
        status: 200,
        message: 'success @ Get Single',
        data: table
      })
    }).catch(err => {
      res.json({
        status: 404,
        message: err.message
      })
    })
}


//buy land for species.
const addHabitatCat = (req, res, next) => {
  db.none("INSERT INTO habitats(category) VALUES (${category})", req.body)
    .then(() => {
      res.status(200).json({
        status: 200,
        message: 'Added a habitat category'
      })
    }).catch(err => {
      res.json({
        status: 404,
        message: err.message
      })
    })
}


module.exports = {
  getAllHabitats,
  getSingleInfo,
  addHabitatCat
}