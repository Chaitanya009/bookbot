'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const app = express()

app.set('port', (process.env.PORT || 5000))

// allows to process the data
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// routes
app.get('/', function(req, res){
  res.send("Hi I am a chatbot")
})

//fb
app.get('/webhook/', function(req, res){
  if(req.query['hub.verify_token'] === "verify_me"){
    res.send(req.query['hub.challenge'])
  }
  res.send("wrong token")
})

app.listen(app.get('port'), function(){
  console.log('running port')
})
