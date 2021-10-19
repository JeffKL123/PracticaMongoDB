const Horario = require("../models/horario.model");
const { response } = require("express");

const getHorarios = async (req, res = response) => {

    const horarios = await Horario.find()
        .populate('aula', 'dia hora_inicio hora_fin')
        .populate('asignatura', 'dia hora_inicio hora_fin');

    res.json({
        ok: true,
        horarios
    })
}

const crearHorarios = async (req, res = response) => {

    const uid = req.uid;
    const horario = new Horario({
        aula: uid,
        ...req.body
    });

    try {
        const horarioDB = await horario.save();

        res.json({
            ok: true,
            horario: horarioDB
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
    getHorarios,
    crearHorarios,
}