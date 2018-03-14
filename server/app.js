const express = require('express')
const app = express()
var helmet = require('helmet')
var bodyParser = require('body-parser')
var morgan = require('morgan')
var path = require('path')
var api = require('./api/api');

// Setup security and json parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet())
app.use(morgan('dev'));


// Add api routes

app.use('/api', api);



app.get('/', (req, res) => res.send('Hello World!'))

app.listen(80, () => console.log('App listening on port 80!'))