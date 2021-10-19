const {Schema, model, Schematypes} = require('mongoose')

const AsignaturaSchema = Schema({
    nombre:{
        type: String,
        required: true
    },
    creditos:{
        type: String,
        required: true,
    },
    profesor:{
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Profesor'
    }
});

AsignaturaSchema.method('toJSON', function(){
    const {__v, ...object } = this.toObject();
    return object;
})

module.exports = model ('Asignatura', AsignaturaSchema)