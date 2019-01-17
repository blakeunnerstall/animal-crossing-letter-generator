const https = require('https');
const fs = require('fs');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// allows use of ALL files in /public/ directory on server
app.use(express.static('public'));

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function (req, res) {
    if (req.url === '/') {
        // __dirname is a global variable which means the current directory aka '/animalcrossing'
        res.sendFile(__dirname + '/index.html');
    }
});

// express is taking the query string and translating it to JSON
/*app.post('/results', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(req.body);
    /*let user = {
        Greeting: req.body.header,
        Body: req.body.body,
        Closing: req.body.closing
    }

    res.json([user]);*/
/*var header = req.body.header;
    var body = req.body.body;
    var end = req.body.closing;
    console.log(`Header: ${header}... Body: ${body}... End: ${end}`);
    res.end(`Header: ${header}... Body: ${body}... End: ${end}`);
});*/

app.get('/results', function (req, res) {
    res.send(req.query);
});

app.get('/results', function (req, res) {
    res.redirect('/yourpage');
});

app.get('/yourpage', function (req, res) {
    res.sendFile(__dirname + '/gohere.html');
});

app.listen(8080, function () {
    console.log('Port 8080: Running!');
});

module.exports = app;