const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

const app = express()
app.use(express.json())
app.use(cors())

// Db Connection
mongoose.connect('mongodb://localhost:27017/nodeapi', { 
    useNewUrlParser: true, 
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
 })

// Requires all models at once
requireDir('./src/models')

// Routes
app.use('/api', require('./src/routes'))

// App
app.listen(3001)
