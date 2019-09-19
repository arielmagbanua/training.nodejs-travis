const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');

const routes = require('./routes/routes');

const app = express();

// parse request body
app.use(bodyParser.urlencoded({extended: false}));

// set a static directory
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

const server = app.listen(8080, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`App listening at https://${host}:${port}`);
});

module.exports = app;