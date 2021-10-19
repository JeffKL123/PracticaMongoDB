const {Schema, model, Schematypes} = require('mongoose')

const EstudianteSchema = Schema({
    nombres:{
        type: String,
        required: true
    },
    apellidos:{
        type: String,
        required: true
    },
    genero:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    fecha_nac:{
        type: String,
        required: true
    }
});

EstudianteSchema.method('toJSON', function(){
    const {__v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
})

module.exports = model ('Estudiante', EstudianteSchema)