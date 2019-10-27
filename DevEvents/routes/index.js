const express = require('express');
const router = express.Router();
const devfestJSON = require('../events-data/devfest.json').devfests;
const othersJSON = require('../events-data/others.json').others;

router.get('/', (req, res, next) => {
  res.render('index', { devfestJSON : devfestJSON, othersJSON : othersJSON });
});

module.exports = router;
