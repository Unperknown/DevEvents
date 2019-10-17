const express = require('express');
const router = express.Router();
const currentYear = (new Date().getFullYear()).toString();
const currentMonth = (new Date().getMonth() + 1).toString();

router.get('/', function(req, res, next) {
  res.render('index', { currentYear : currentYear, currentMonth : currentMonth });
});

module.exports = router;
