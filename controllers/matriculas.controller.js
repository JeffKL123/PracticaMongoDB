const Matricula = require("../models/matricula.model");
const { response } = require("express");

const getMatriculas = async (req, res = response) => {

    const matriculas = await Matricula.find()
        .populate('estudiante', 'fecha')
        .populate('asignatura', 'fecha');

    res.json({
        ok: true,
        matriculas
    })
}

const crearMatricula = async (req, res = response) => {

    const uid = req.uid;
    const matricula = new Matricula({
        estudiante: uid,
        asignatura: uid,
        ...req.body
    });

    try {
        const matriculaDB = await matricula.save();

        res.json({
            ok: true,
            matricula: matriculaDB
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
    getMatriculas,
    crearMatricula,
}