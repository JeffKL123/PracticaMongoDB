const Asignatura = require("../models/asignatura.model");
const { response } = require("express");

const getAsignaturas = async (req, res = response) => {

    const asignaturas = await Asignatura.find()
        .populate('profesor', 'nombre creditos');

    res.json({
        ok: true,
        asignaturas
    })
}

const crearAsignatura = async (req, res = response) => {

    const uid = req.uid;
    const asignatura = new Asignatura({
        profesor: uid,
        ...req.body
    });

    try {
        const asignaturaDB = await asignatura.save();

        res.json({
            ok: true,
            asignatura: asignaturaDB
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
    getAsignaturas,
    crearAsignatura,
}