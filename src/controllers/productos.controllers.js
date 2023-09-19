import Producto from "../models/producto.js";

export const listarProductos = (req, res) => {
  try {
    res.send("esto es una pruebita");
  } catch (error) {
    console.log(error);
  }
};
