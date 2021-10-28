//defino servidor
const express = require('express')
const app = express()
const cors = require('cors')

// settings
app.set('port', process.env.PORT || 3000)
//si no existe variable de entorno de puerto, tome valor 3000

// middlewares
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())//ahora servidor entendera formato json

// routes
app.use('/api/tasks', require('./routes/tasks'))


module.exports = app;