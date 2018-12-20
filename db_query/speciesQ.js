const db = require('../db/db_route.js').db

//GET ALL
const getAllSpecies = (req, res, next) => {
  db.any('SELECT * FROM species').then((table) => {
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

//Get Single Info
const getSingleInfo = (req, res, next) => {
  db.one('SELECT * from species WHERE id = ${params}', {
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
        message: err.message})
    })
}

//add Species
const addSpecies = (req, res, next) => {
  db.none("INSERT INTO species(name, is_mammal) VALUES (${name}, ${is_mammal})", req.body)
    .then(() => {
      res.status(200).json({
        status: 200,
        message: 'Add Species - successful'
      })
    }).catch(err => {
      res.json({
        status: 404,
        message: err.message
      })
    })
}

module.exports = {
  getAllSpecies,
  getSingleInfo,
  addSpecies
}