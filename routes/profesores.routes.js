/*
    Ruta: /api/profesores
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar‐campos');
const { getProfesores, crearProfesor } = require('../controllers/profesores.controller')

const router = Router();

router.get('/', getProfesores);
router.post('/',
    [
        check('nombres', 'El nombre es obligatorio').not().isEmpty(),
        check('apellidos', 'El apellido es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password es obligatorio').not().isEmpty(),
        check('titulo', 'El titulo es obligatorio').not().isEmpty(),
        check('genero', 'El genero es obligatorio').not().isEmpty(),
        validarCampos,
    ],
    crearProfesor);

module.exports = router