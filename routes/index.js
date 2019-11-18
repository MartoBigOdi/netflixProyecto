var express = require('express');
var router = express.Router();
const indexCtrl = require('../controllers/ctrl');

router.get('/', indexCtrl.index);
router.get('/1', indexCtrl.pagina1);
router.get('/2', indexCtrl.pagina2);
router.get('/3', indexCtrl.pagina3);
router.get('/accion', indexCtrl.accion);
router.get('/infantil', indexCtrl.infantil);
router.get('/terror', indexCtrl.terror);

module.exports = router;
