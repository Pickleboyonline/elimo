const express = require('express')
const app = express()
var reservations = require('./models/reservations');


app.get('/', (req, res, next) => res.send(reservations.message))




app.listen(3000, () => console.log('Example app listening on port 3000!'))