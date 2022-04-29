const express = require('express') 
const connection = require('./src/database')
const router = require('./src/routes')
const cors = require('cors')

const app = express() 

require('./src/models/Post')

app.use(express.json()) 
app.use(cors())
app.use('/', router) 

connection.authenticate() 
    .then(() => console.log("Database connected"))
    .catch((err) => console.error(`An error has occurred: ${err}`))

app.listen(8080, (error) => { 
    if (error){
        console.log(error)
    }
    console.log('API started successfully') 
})