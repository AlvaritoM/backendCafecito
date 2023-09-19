import { Router } from "express";
import { listarProductos } from "../controllers/productos.controllers.js";
import { crearProducto } from "../controllers/productos.controllers.js";

const router = Router();
router.route("/producto").get(listarProductos).post(crearProducto);

export default router;
