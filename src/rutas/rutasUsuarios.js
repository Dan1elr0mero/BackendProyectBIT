import { Router } from "express";
import ControladorUsuarios from "../Drivers/driversUsuarios.js";
//  importamos el modulo para crear rutas
const router = Router();
// creamos constante para guardar lo que retorna la funcion Router
router.get("/", ControladorUsuarios.leerUsuarios);
/*estas son las rutas que usa post man cuando hacemos una solicitud*/
router.get("/:id", ControladorUsuarios.leerUsuario);

router.post("/", ControladorUsuarios.CrearUsuario);

router.put("/:id", ControladorUsuarios.actualizarUsuarios);

router.delete("/:id", ControladorUsuarios.eliminarUsuarios);

export default router;
// exporta la constante
