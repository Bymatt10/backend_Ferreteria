const express = require('express');

const router = express.Router();
const PersonaController = require('../controllers/persona');

const personaController = new PersonaController();

router.get('/', personaController.list);
router.get('/:id', personaController.get);
router.post('/create', personaController.create);
 router.delete('/delete/:id', personaController.delete)
module.exports = router;
