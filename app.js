const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const app = express();

// parse request body
app.use(bodyParser.urlencoded({extended: false}));

app.get('/',(req, res, next) => {
    res.send('<h1>Foo Bar</h1>');
});

app.get('/hello-world',(req, res, next) => {
    res.send('<h1>Hello World</h1>');
});

const server = app.listen(8080, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`App listening at https://${host}:${port}`);
});

module.exports = app;