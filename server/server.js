const express = require('express')
const server = express()
const articleRouter = require('./article/router')
const PORT = process.env.port || 4000


const mongoose = require('mongoose')
// connect to the database
mongoose.connect(`mongodb+srv://robgarciaxyz:ANU2020Wyn@cluster0-enzqk.mongodb.net/test?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useCreateIndex:true,
  useUnifiedTopology: true
})
// open the connection
const connection = mongoose.connection
connection.once('open', () => console.log("MongoDB connection established."))

// to format requests into JSON
server.use(express.json())
// to correctly get the information from submissions
server.use(express.urlencoded({ extended: false }))
server.use('/articles', articleRouter)
server.listen(PORT, () => console.log(`Express server listening on port ${PORT}`))





