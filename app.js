const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')

const app = express()

// Connect to the MongoDB database
mongoose.connect('mongodb+srv://arunkudiyal:examplepwd@cluster0.2pssb.mongodb.net/?retryWrites=true&w=majority')
    .then(console.log('DB Connected Successfully!'))
    .catch(err => console.log(err))

// Use the body-parser middleware to parse the request body into a JavaScript object
app.use( bodyParser.urlencoded({ extended: false }) )
app.use( bodyParser.json() )

// Enable the request logging
app.use( morgan('dev') )

// MANGE YOUR APP ROUTES
// localhost:5000/products
const productsRoute = require('./api/routes/products')
const ordersRoute = require('./api/routes/orders')

app.use('/products', productsRoute)
app.use('/orders', ordersRoute)
// app.use('/orders', )

module.exports = app;