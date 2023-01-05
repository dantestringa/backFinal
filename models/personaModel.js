const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const personaSchema = new Schema({
    nombre: {
        type: 'string',
        required: true
    },
    apellido: {
        type: 'string',
        required: true
    },
    dni: {
        type: 'string',
        required: true
    },
    tipo: {
        type: 'string',
        required: true
    },
    matricula: {
        type: 'string',
        required: true
    },
    timestamp: {
        type: 'date',
        default: new Date()
    }
})

const Persona = mongoose.model('persona', personaSchema)

module.exports = Persona