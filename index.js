const express = require('express'); //Sintaxis de importación en nodejs
require('dotenv').config();
const {dbConection} = require('./config/database')
const cors = require('cors');

//Creando el servidor express
const app = express();

//Configuración de CORS
app.use(cors());

app.use(express.json());

//Conexion a la BD
dbConection()

//Rutas de la API
app.use('/api/estudiantes', require('./routes/estudiantes.routes'));
app.use('/api/profesores', require('./routes/profesores.routes'));
app.use('/api/aulas', require('./routes/aulas.routes'));
app.use('/api/asignaturas', require('./routes/asignaturas.routes'));
app.use('/api/horarios', require('./routes/horarios.routes'));
app.use('/api/matriculas', require('./routes/matriculas.routes'));

//Para levantar el servidor
app.listen(process.env.PORT, () => {
    console.log('Servidor desplegado en el puerto:' + process.env.PORT)
})