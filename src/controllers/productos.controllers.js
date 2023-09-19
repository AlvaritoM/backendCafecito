import Producto from "../models/producto.js";

export const listarProductos = (req, res) => {
  try {
    res.send("esto es una pruebita");
  } catch (error) {
    console.log(error);
  }
};

export const crearProducto = async (req, res) => {
  try {
    console.log(req.body);
    const productoNuevo = new Producto(req.body);
    await productoNuevo.save();
    res.status(201).json({ mensaje: "El producto fue creado correctamente" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ mensaje: "El producto no pudo ser creado" });
  }
};
