const db = require('../db/db_route.js').db

//GET ALL RESEARCHERS
const getAllStaff = (req,res,next) => {
  db.any('SELECT * FROM researchers').then((table) =>{
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
const getSingleInfo = (req,res,next) => {
  db.one('SELECT * from researchers WHERE id = ${params}',{
    params: req.params.id
  })
  .then((table)=> {
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

//Delete a Researcher by ID
const deleteResearcher = (req, res, next) => {
  db.none('DELETE FROM researchers WHERE id = ${params}', {
      params: req.params.id
    })
    .then((table) => {
      res.status(200).json({
        status: 200,
        message: 'Delete success',
        data: table
      })
    }).catch(err => {
      res.json({
        status: 404,
        message: err.message
      })
    })
}


const addResearcher = (req, res, next) => {
  db.none("INSERT INTO researchers(name, job_title) VALUES (${name}, ${job_title})", req.body)
    .then((table) => {
      res.status(200).json({
        status: 200,
        message: 'Add Researcher - success'
      })
    }).catch(err => {
      res.json({
        status: 404,
        message: err.message
      })
    })
}

const editResearcher = (req, res, next) => {
  db.none('UPDATE researchers SET name = ${name}, job_title = ${job} WHERE id = ${params}', {
    name: req.body.name,
    job: req.body.job_title,
    params: req.params.id
  })
    .then(() => {
      res.status(200).json({
        status: 200,
        message: 'Edited Researcher - success'
      })
    }).catch(err => {
      res.json({
        status: 404,
        message: err.message
      })
    })
}

module.exports = {
  getAllStaff,
  getSingleInfo,
  deleteResearcher,
  addResearcher,
  editResearcher
}