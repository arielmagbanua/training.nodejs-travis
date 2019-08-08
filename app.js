const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const app = express();

// parse request body
app.use(bodyParser.urlencoded({extended: false}));

app.get('/',(req, res, next) => {
    res.send('<h1>Foo Bar</h1>');
});

app.listen(3000);