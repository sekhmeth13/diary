let router = require('express').Router();

const routesIndex = ['./notes'];

routesIndex.forEach(routeName => router = require(routeName)(router));

module.exports = router;