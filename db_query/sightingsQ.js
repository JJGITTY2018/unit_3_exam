const db = require('../db/db_route.js').db

//GET ALL Sightings
const getAllSights = (req, res, next) => {
  db.any('SELECT * FROM sightings').then((table) => {
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


//Get all sightings  by a specific species.
const getSightBySpecies = (req, res, next) => {
  db.manyOrNone('SELECT * from sightings WHERE species_id = ${params}', {
      params: req.params.id
    })
    .then((table) => {
      res.status(200).json({
        status: 200,
        message: 'success - GET specific sightings  by a species.',
        data: table
      })
    }).catch(err => {
      res.json({
        status: 404,
        message: err.message
      })
    })
}


//Get all sightings  by a specific researcher.
const getSightByResearchers = (req, res, next) => {
  db.any('SELECT * from sightings WHERE researcher_id = ${params}', {
      params: req.params.id
    })
    .then((table) => {
      res.status(200).json({
        status: 200,
        message: 'success - GET specific sightings  by a species.',
        data: table
      })
    }).catch(err => {
      res.json({
        status: 404,
        message: err.message
      })
    })
}

//Get all sightings  in a specific habitat.
const getSightByHabitat = (req, res, next) => {
  db.any('SELECT * from sightings WHERE habitat_id = ${params}', {
      params: req.params.id
    })
    .then((table) => {
      res.status(200).json({
        status: 200,
        message: 'success - GET specific sightings by a habitat.',
        data: table
      })
    }).catch(err => {
      res.json({
        status: 404,
        message: err.message
      })
    })
}


//Delete a Sighting Record by its ID
const deleteSighting = (req, res, next) => {
  db.none('DELETE FROM sightings WHERE id = ${params}', {
      params: req.params.id
    })
    .then((table) => {
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


//Spotted log - log of  animals sighted at its wild habitat
const spotAnimal = (req, res, next) => {
  db.none("INSERT INTO sightings(species_id,habitat_id, researcher_id) VALUES (${species_id}, ${researcher_id},${habitat_id})", req.body)
    .then(() => {
      res.status(200).json({
        status: 200,
        message: 'Sighting added'
      })
    }).catch(err => {
      res.json({
        status: 404,
        message: err.message
      })
    })
}
module.exports = {
  getAllSights,
  getSightBySpecies,
  getSightByResearchers,
  getSightByHabitat,
  deleteSighting,
  spotAnimal
}