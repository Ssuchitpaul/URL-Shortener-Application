const express = require('express');
const routes = express.Router();
const urls = require('./control');

// Route to shorten a URL
routes.post('/url', urls.newurl);

// Route to get all URLs
routes.get('/url', urls.getalls);

// Route to handle short URL redirection
routes.get('/:shorturlid', urls.redirectToLongUrl);

module.exports = routes;
