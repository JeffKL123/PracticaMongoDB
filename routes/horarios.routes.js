/*
    Ruta: /api/asignaturas
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar‐campos');
const { getHorarios, crearHorarios } = require('../controllers/horarios.controller')

const router = Router();

router.get('/', getHorarios);
router.post('/',
    [
        check('dia', 'El dia es obligatorio').not().isEmpty(),
        check('hora_inicio', 'La hora de inicio es obligatoria').not().isEmpty(),
        check('hora_fin', 'La hora de fin es obligatoria').not().isEmpty(),
        check('asignatura', 'La asignatura es obligatoria').not().isEmpty(),
        check('aula', 'El aula es obligatoria').not().isEmpty(),
        validarCampos,
    ],
    crearHorarios);

module.exports = router