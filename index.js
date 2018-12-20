const express = require('express');
const app = express();
const bodyParser = require('body-parser');


//paths to JS routes
const researcher = require('./routes/researchers.js')
const species = require('./routes/species.js')
const animals = require('./routes/animals.js')
const habitats = require('./routes/habitats.js')
const taggings = require('./routes/taggings.js')
const sightings = require('./routes/sightings.js')

//body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//localhost
port = 1220
app.listen(1220, () => {
  console.log(`Marine Biology API is ON @ PORT :${port}`)
})


// main page routes
app.get('/', (req, res, next) => {
  res.json("You hit the main page")
})



//routers routes --> 
app.use('/researchers',researcher)
app.use('/species', species)
app.use('/animals', animals)
app.use('/habitats', habitats)
app.use('/taggings', taggings)
app.use('/sightings', sightings)


//errors
app.get('/*', (req, res, next) => {
  res.send('Error on path, please refer to documentation for paths.')
})
app.post('/*', (req, res, next) => {
  res.send('Error on post, please refer to documentation for paths.')
})
app.patch('/*', (req, res, next) => {
  res.send('Error on patch, please refer to documentation for paths.')
})
app.delete('/*', (req, res, next) => {
  res.send('Error on delete, please refer to documentation for paths.')
})