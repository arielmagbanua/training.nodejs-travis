const path = require('path');
const express = require('express');

const router = express.Router();

router.get('/about', (req, res, next) => {
    res.send('<h1>Foo Bar</h1>');
});

router.get('/', (req, res, next) => {
    res.send('<h1>Foo Bar</h1>');
});