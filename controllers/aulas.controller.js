const Aula = require("../models/aula.model");
const bcrypt = require('bcryptjs');
const { response } = require("express");

const getAulas = async (req, res) => {

    const aulas = await Aula.find({}, 'nombre edificio capacidad')

    res.json({
        ok: true,
        aulas
    })
}

const crearAula = async (req, res = response) => {

    const { nombre, edificio, capacidad } = req.body;

    try {
        const existeName = await Aula.findOne({ nombre });

        if (existeName) {
            return res.status(400).json({
                ok: false,
                msg: 'El nombre ya ha sido registrado'
            });
        }

        //creamos un objeto de la clase model Aula
        const aula = new Aula(req.body);

        //indicamos a mongoose que registre al aula en la bd
        await aula.save();

        res.json({
            ok: true,
            aula
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
    getAulas,
    crearAula,
}