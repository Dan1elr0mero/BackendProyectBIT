import "dotenv/config"; /*llamo modulos para variables de entorno*/
import "./database.js"; /*imoirtando el modulo de la base de datos*/
import servidor from "./servidor.js"; /*llamo modulo del server */

const port = servidor.get("port"); /* recupero el port*/
servidor.listen(port, () => {
  /*pongo a correr el servidaor */
  console.log(`servidor ejecutado en el puerto ${port}`);
});
