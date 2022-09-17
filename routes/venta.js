const express = require('express');

const router = express.Router();
const VentaController = require('../controllers/venta');

const ventaController = new VentaController();

router.get('/', ventaController.list);
router.get('/:id', ventaController.get);
router.post('/create', ventaController.create);
router.delete('/delete/:id', ventaController.delete)
module.exports = router;
