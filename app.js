const express = require('express')
const morgan = require('morgan')

const app = express()
app.use(express.json())

console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.get('/', (req, res) => {
    res.send('Hello world')
})

module.exports = app
