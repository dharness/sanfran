// server.js

// set up ======================================================================
// get all the tools we need
var express = require('express')
var app = express()
var port = process.env.PORT || 8080
var bodyParser = require('body-parser')
var methodOverride = require('method-override')
var http = require('http')

// DATBASE CRUMS ======================================

app.use(bodyParser.json()) // get information from html forms
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(express.static(__dirname + '/public'))

app.get('/*', function(req, res) {
    res.sendfile('./public/index.html'); //sendfile is so key, thas mah GIRL
});
// launch ======================================================================
app.listen(port)
console.log('The magic happens on port ' + port)