const express = require('express'); // import express framework
const app = express(); // App es mi servidor.
const cors = require('cors'); // Cross Origin Resource Sharing. Para cargar recursos de dos o más fuentes


// settings of our server
app.set('port', process.env.PORT || 4001); // Fija el puerto para el servidor



/** middlewares: Aquellos métodos o funciones o operaciones que se llaman
* entre el procesamiento de la solicitud y el envío de la respuesta a esa solicitud */
app.use(cors()); // Me permite, una vez que llegue una petición a mi servidor, enviar y recibir datos de otros servidores
app.use(express.json()); // Para que el servidor entienda formato json

// routes: Las rutas que van a interactuar con la aplicación de react
app.use('/api/users', require('./routes/users'));
app.use('/api/notes', require('./routes/notes'));
module.exports = app;
