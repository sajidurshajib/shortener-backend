const dotenv = require('dotenv')
//env import
dotenv.config({ path: './config.env' })

//app require
const app = require('./app')

//run server
const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
