const Profesor = require("../models/profesor.model");
const bcrypt = require('bcryptjs');
const { response } = require("express");

const getProfesores = async (req, res) => {

    const profesores = await Profesor.find({}, 'nombres apellidos email password titulo genero')

    res.json({
        ok: true,
        profesores
    })
}

const crearProfesor = async (req, res = response) => {

    const { nombres, apellidos, email, password, titulo, genero } = req.body;

    try {
        const existeEmail = await Profesor.findOne({ email });

        if (existeEmail) {
            return res.status(400).json({
                ok: false,
                msg: 'El email ya ha sido registrado'
            });
        }

        //creamos un objeto de la clase model Profesor
        const profesor = new Profesor(req.body);

        //indicamos a mongoose que registre al profesor en la bd
        await profesor.save();

        res.json({
            ok: true,
            profesor
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error en el servidor, revisar logs'
        });
    }
}

module.exports = {
    getProfesores,
    crearProfesor,
}