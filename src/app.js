const express = require('express')
const morgan = require('morgan')
const linkRoutes = require('./routes/linkRoutes')

//express
const app = express()
app.use(express.json())

//morgan
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

//main route
app.get('/', (req, res) => {
    res.json({
        msg: 'Server runningg',
    })
})

//route
app.use('/api/link', linkRoutes)

//export
module.exports = app
