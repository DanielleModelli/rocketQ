// import express
const express = require('express')
const route = require('./routes')
const path = require('path')

// initialize the express server
const server = express()

server.set('view engine', 'ejs')
server.set('views', path.join(__dirname, 'views'))

server.use(express.static('public'))

server.use(route)
server.listen(3000, () => console.log('RODANDO'))

// express().listen(3000)
