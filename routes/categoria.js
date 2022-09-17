const express = require('express');

const router = express.Router();
const categoriaController = require('../controllers/categoria');

const CategoriaController = new categoriaController();

router.get('/', CategoriaController.list);
router.get('/:id', CategoriaController.get);
router.post('/create', CategoriaController.create);
router.delete('/delete/:id', CategoriaController.delete)
module.exports = router;
