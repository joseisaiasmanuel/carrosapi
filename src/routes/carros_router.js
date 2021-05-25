var express = require('express');
var router = express.Router();
const CarrosController = require('../controllers/carro_controllers')


//INDEX
router.get('/', CarrosController.bindMethod('index'));
//SHOW
router.get('/:id',  CarrosController.bindMethod('show'));
//STORE
router.post('/', CarrosController.bindMethod('store'));
//REMOVE
router.delete('/:id',CarrosController.bindMethod('remove'));

module.exports = router;