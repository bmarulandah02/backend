import express from "express"; // importamos la libreria
import "dotenv/config";
import cors from "cors";
import rutausuario from "./usuario/usuario.routes.js";
// creamos una instancia de la libreria express en la constante app
const app = express(); //metodo constructor de la libreria
const PORT = process.env.PORT || 4100; //puerto donde desplegaremos el server
//middlewares
app.use(express.urlencoded({ extended: true })); // x-www-form-urlencoded
//desde express
app.use(express.json()); // Para que el servidor entienda JSON en el body
app.use(cors()); //
// ruta para los endpoint de usuario
app.get("/", (req, res) => {
res.send("¡Hola, mundo!");
});
app.use("/api", rutausuario);
app.listen(PORT, () => {
console.log(`Servidor Iniciado en el puerto ${PORT}`);
});