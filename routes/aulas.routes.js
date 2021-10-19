/*
    Ruta: /api/aulas
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar‐campos');
const { getAulas, crearAula } = require('../controllers/aulas.controller')

const router = Router();

router.get('/', getAulas);
router.post('/',
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('edificio', 'El apellido es obligatorio').not().isEmpty(),
        check('capacidad', 'El email es obligatorio').not().isEmpty(),
        validarCampos,
    ],
    crearAula);

module.exports = router