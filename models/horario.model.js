const { Schema, model, Schematypes } = require('mongoose')

const HorarioSchema = Schema({
    dia: {
        type: String,
        required: true
    },
    hora_inicio:{
        type: String,
        required: true
    },
    hora_fin:{
        type: String,
        required: true
    },
    asignatura: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Asignatura'
    },
    aula: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Aula'
    },
});

module.exports = model('Horario', HorarioSchema)