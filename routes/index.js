var express = require('express');
var router = express.Router();
const indexCtrl = require('../controllers/ctrl');

router.get('/', indexCtrl.index);
router.get('/accion', indexCtrl.accion);
router.get('/infantil', indexCtrl.infantil);
router.get('/terror', indexCtrl.terror);

module.exports = router;
