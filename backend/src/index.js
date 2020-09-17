require("dotenv").config(); // Importa variables de entorno antes de que inicie la aplicación

const app = require("./app");
require("./database"); // Basta dejarlo así porque database.js no exporta nada. Solo se ejecuta el código.

async function main() {
  await app.listen(app.get("port"));
  console.log("Server on port", app.get("port"));
}

main();
