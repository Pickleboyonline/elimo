const express = require('express')
const app = express()
var helmet = require('helmet')
var bodyParser = require('body-parser')
var morgan = require('morgan')
var path = require('path')
var api = require('./api/api');
var compression = require('compression')
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/elimo');

// Setup security and json parser and compressor
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet())
app.use(morgan('dev'));
app.use(compression())

// Add api routes

app.use('/api', api);



//app.get('/', (req, res) => res.send('Hello World!'))

app.use('/', express.static(path.join(__dirname, '..', 'build')))


app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
    
  })

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  app.listen(80, () => console.log('App listening on port 80!'))
});

