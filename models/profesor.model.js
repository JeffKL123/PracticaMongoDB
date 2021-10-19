const { Schema, model, Schematypes } = require('mongoose')

const ProfesorSchema = Schema({
    nombres: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    titulo: {
        type: String,
        required: true
    },
    genero: {
        type: String,
        require: true,
    }
});

ProfesorSchema.method('toJSON', function () {
    const { __v, _id, password, ...object } = this.toObject();
    object.uid = _id;
    return object;
})

module.exports = model('Profesor', ProfesorSchema)