const mongoose = require("mongoose"); // Para traer Mongoose, necesario para conectarnos a una BD MongoDB
// URI: La dirección de la DB a la que me voy a conectar
const URI = process.env.MONGODB_URI
  ? process.env.MONGODB_URI
  : "mongodb://localhost/databasetest";

/**
 * useUnifiedTopology, useNewUrlParser, useCreateIndex son para esconder
 * mensajes de warning que aparecen debido a la llegada de próximas actualizaciones
 */
mongoose.connect(URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
}); // Para conectarnos a instancia o servidor de MongoDB. Utiliza MondoDB como protocolo

mongoose.connection.once("open", () => {
  // Se ejecuta una vez conectados a la BD
  console.log("DB is connected to", URI);
});
