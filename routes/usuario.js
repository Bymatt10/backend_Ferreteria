const express = require('express');

const router = express.Router();
const UsuarioController = require('../controllers/usuario');

const usuarioController = new UsuarioController();

router.get('/', usuarioController.list);
router.get('/:id', usuarioController.get);
router.post('/create', usuarioController.create);
router.delete('/delete/:id', usuarioController.delete)
module.exports = router;
