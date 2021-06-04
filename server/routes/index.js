var express = require('express');
var router = express.Router();
var control = require('../controllers')

router.get('/:id',control.readReview);
router.get('/meta/:id',control.readRating);

module.exports = router;