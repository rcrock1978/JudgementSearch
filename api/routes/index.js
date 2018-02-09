var express = require('express');
var router = express.Router();

var ctrlHotels = require('../controllers/JudgementSearch.controllers.js');

router
  .route('/Search')
  .get(ctrlHotels.hotelsGetAll);

module.exports = router;