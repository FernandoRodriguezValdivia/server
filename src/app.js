require('colors');
const express = require('express');
const cors = require('cors')
const clientRouter = require('./users/user.routes')
const sellerRouter = require('./seller/seller.routes')
const app = express();
app.use(express.json());
app.use(cors())

app.use('/api/user', clientRouter)
app.use('/api/seller', sellerRouter)

module.exports = app;