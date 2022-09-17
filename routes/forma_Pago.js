const express = require('express');

const router = express.Router();
const metodo_PagoController = require('../controllers/forma_Pago');

const metodo_pagoController = new metodo_PagoController();

router.get('/', metodo_pagoController.list);
router.get('/:id', metodo_pagoController.get);
router.post('/create', metodo_pagoController.create);
router.delete('/delete/:id', metodo_pagoController.delete)
module.exports = router;
