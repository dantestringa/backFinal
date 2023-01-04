require('dotenv').config()
const mongoose = require('mongoose')
const URL = 'mongodb+srv://dantestringa:Stringa123@cluster0.8s5pdqm.mongodb.net/mean?retryWrites=true&w=majority'
//mongoose.set('strictQuery', false); //Afloja el chat de la consola

const conexion = mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
    console.log(`Conexion a la DataBase exitosa - URL: ${URL}`);
})

mongoose.connection.on('error', () => {
    console.log(`No se pudo conectar a la DataBase - URL: ${URL}`);
})

module.exports = conexion