/*
    Ruta: /api/estudiantes
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar‐campos');
const { getEstudiantes, crearEstudiante } = require('../controllers/estudiantes.controller')

const router = Router();

router.get('/', getEstudiantes);
router.post('/',
    [
        check('nombres', 'El nombre es obligatorio').not().isEmpty(),
        check('apellidos', 'El apellido es obligatorio').not().isEmpty(),
        check('genero', 'El genero es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('fecha_nac', 'La fecha de nacimiento es obligatorio').not().isEmpty(),
        validarCampos,
    ],
    crearEstudiante);

module.exports = router