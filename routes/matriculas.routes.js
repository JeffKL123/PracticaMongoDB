/*
    Ruta: /api/asignaturas
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar‐campos');
const { getMatriculas, crearMatricula } = require('../controllers/matriculas.controller')

const router = Router();

router.get('/', getMatriculas);
router.post('/',
    [
        check('estudiante', 'El estudiante es obligatorio').not().isEmpty(),
        check('asignatura', 'La asignatura de inicio es obligatoria').not().isEmpty(),
        check('fecha', 'La fecha es obligatoria').not().isEmpty(),
        validarCampos,
    ],
    crearMatricula);

module.exports = router