const express = require('express')
const morgan = require('morgan')

//express
const app = express()
app.use(express.json())

//morgan
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

//route
app.get('/', (req, res) => {
    res.send('Hello world')
})

//export
module.exports = app
