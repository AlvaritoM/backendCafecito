import { Router } from "express";
import { listarUsuarios } from "../controllers/usuarios.controllers.js";

const router = Router();
router.route("/usuario").get(listarUsuarios);

export default router;
