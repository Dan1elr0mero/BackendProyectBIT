import "dotenv/config";
import express from "express";
import router from "./rutas/rutasUsuarios.js";
import cors from "cors";

import routerLogin from "./rutas/lorinrouter.js";
// se importa los metodos de otrod achibos

const servidor = express(); /*crea un servidor usando el modulo express*/
const port =
  process.env.PORT; /*llama al puerto que esta en variables de entorno*/
servidor.use(
  express.json()
); /* se esportamos los metodos de json para que puede leerlos ya que vienen de postman */
servidor.use(cors());
servidor.use(
  "/usuarios/",
  router
); /*para la ruta usuarios usa un enrutador aparte*/
servidor.use("/login/", routerLogin);
servidor.set("port", port); /* establecer ese puerto al servidor*/
servidor.get("/", (request, response) => {
  response.json({
    message: "works",
  }); /*mensaje para probar que funciona esta es la ruta RAIZ*/
});

export default servidor;
