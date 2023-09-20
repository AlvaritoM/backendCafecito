import express from "express";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config"; // cuando subamos a produccion podra usar variables de entorno
import productoRouter from "./src/routes/productos.routes.js";
import usuarioRouter from "./src/routes/usuarios.routes.js";
import "./src/database/database.js";

// console.log("esto es una prueba 1");
// 1- Configuraciones Iniciales (puerto por ejemplo)
const app = express();
// crear una variable con express
app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), () => {
  console.log("Hola mundo " + app.get("port"));
});
// esto seria para cuando el servidor manda el puerto en variable de entorno
// 2- middlewares: funciones que se agregan antes de las rutas
app.use(cors()); // permite conexiones remotas
app.use(express.json()); // interpreta JSON para cuando mandan solicitudes en este formato
app.use(express.urlencoded({ extended: true })); // entienda array o string de las peticiones del body del request
app.use(morgan("dev")); // nos da mas informacion en la terminal

// 3- crear las rutas
// http://localhost:4000/api/producto
app.use("/api", productoRouter);
app.use("/api/auth", usuarioRouter);

//tarea crear ruta y controlador para los usuarios
