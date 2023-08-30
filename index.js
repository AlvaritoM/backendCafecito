import express from "express";

// console.log("esto es una prueba 1");
// 1- Configuraciones Iniciales (puerto por ejemplo)
const app = express();
// crear una variable con express
app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), () => {
  console.log("Hola mundo " + app.get("port"));
});
// esto seria para cuando el servidor manda el puerto en variable de entorno
// 2- middlewares

// 3- crear las rutas
