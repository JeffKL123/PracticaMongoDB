/*
    Ruta: /api/asignaturas
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar‐campos');
const { getAsignaturas, crearAsignatura } = require('../controllers/asignaturas.controller')

const router = Router();

router.get('/', getAsignaturas);
router.post('/',
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('creditos', 'Los creditos son obligatorios').not().isEmpty(),
        check('profesor', 'El profesor es obligatorio').not().isEmpty(),
        validarCampos,
    ],
    crearAsignatura);

module.exports = router