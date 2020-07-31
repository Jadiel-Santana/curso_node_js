const express = require('express')
const app = express()
const routProducts = require('./routes/products')

app.use('/products', routProducts)

module.exports = app