const {Schema, model, Schematypes} = require('mongoose')

const MatriculaSchema = Schema({
    estudiante:{
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Estudiante'
    },
    asignatura:{
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Asignatura'
    },
    fecha:{
        type: String,
        required: true
    }
});

module.exports = model ('Matricula', MatriculaSchema)