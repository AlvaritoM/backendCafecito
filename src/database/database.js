import mongoose from "mongoose";
import dotenv from "dotenv";

// Cargar variables de entorno desde el archivo .env
dotenv.config();

const mongoURI = process.env.MONGODB_URI;

mongoose.connect(mongoURI);
const datosConexion = mongoose.connection;

datosConexion.once("open", () => {
  console.log("BD conectada");
});
