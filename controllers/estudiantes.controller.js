const Estudiante = require("../models/estudiante.model");

const getEstudiantes = async (req, res) => {

    const estudiantes = await Estudiante.find({}, 'nombres apellidos genero email fecha_nac')

    res.json({
        ok: true,
        estudiantes
    })
}

const crearEstudiante = async (req, res) => {

    const { nombres, apellidos, genero, email, fecha_nac } = req.body;

    try {
        const existeEmail = await Estudiante.findOne({ email });

        if (existeEmail) {
            return res.status(400).json({
                ok: false,
                msg: 'El email ya ha sido registrado'
            });
        }

        //creamos un objeto de la clase model Estudiante
        const estudiante = new Estudiante(req.body);

        //indicamos a mongoose que registre al estudiante en la bd
        await estudiante.save();

        res.json({
            ok: true,
            estudiante
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
    getEstudiantes,
    crearEstudiante,
}