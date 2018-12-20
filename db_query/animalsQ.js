const db = require('../db/db_route.js').db

//GET ALL
const getAllAnimals = (req, res, next) => {
  db.any('SELECT * FROM animals').then((table) => {
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
  db.oneOrNone('SELECT * from animals WHERE id = ${params}', {
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


//Delete a Animal Record by its ID
const deleteAnimal = (req, res, next) => {
  db.none('DELETE FROM animals WHERE id = ${params}', {
      params: req.params.id
    })
    .then(() => {
      res.status(200).json({
        status: 200,
        message: 'Delete success'
      })
    }).catch(err => {
      res.json({
        status: 404,
        message: err.message
      })
    })
}

//add Monster!
const addSpecies = (req, res, next) => {
  db.none("INSERT INTO animals(nickname, species_id) VALUES (${nickname}, ${species_id})", req.body)
    .then(() => {
      res.status(200).json({
        status: 200,
        message: 'Added to record Animals and its nickname. - successful'
      })
    }).catch(err => {
      res.json({
        status: 404,
        message: err.message
      })
    })
}


const editAnimal = (req, res, next) => {
  db.none('UPDATE animals SET species_id = ${species_id}, nickname = ${name} WHERE id = ${params}', {
      name: req.body.nickname,
      species_id: req.body.species_id,
      params: req.params.id
    })
    .then(() => {
      res.status(200).json({
        status: 200,
        message: 'Edited animals - success'
      })
    }).catch(err => {
      res.json({
        status: 404,
        message: err.message
      })
    })
}
module.exports = {
  getAllAnimals,
  getSingleInfo,
  deleteAnimal,
  addSpecies,
  editAnimal
}