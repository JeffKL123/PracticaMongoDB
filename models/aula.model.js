const { Schema, model, Schematypes } = require('mongoose')

const AulaSchema = Schema({
    nombre:{
        type: String,
        required: true
    },
    edificio: {
        type: String,
        required: true
    },
    capacidad:{
        type: String,
        required: true
    }
});

AulaSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
})

module.exports = model('Aula', AulaSchema)