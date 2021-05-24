 var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 res.send('ola mundo alterado');
});

module.exports = router;
