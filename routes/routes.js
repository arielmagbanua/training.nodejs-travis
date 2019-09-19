const path = require('path');
const express = require('express');
const router = express.Router();

const viewPath = '../views';

router.get('/about', (req, res, next) => {
    res.sendFile(path.join(__dirname, viewPath, 'about.html'));
});

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, viewPath, 'index.html'));
});

module.exports = router;