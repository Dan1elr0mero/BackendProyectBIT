import mongoose from "mongoose"; /*importar moogose*/
mongoose
  .connect(
    /*con este metodo se conecta a la vase de datos */
    // process.evn.MONGODB
    "mongodb+srv://cdromero:Yp5mwdf6paE8rrx3@cluster0.x4xbbj3.mongodb.net/?retryWrites=true&w=majority" /*esto deve ser una variable de entorno*/
  )
  .then((dato) =>
    console.info("camino feliz")
  ) /*se puede cambiar .log por .info o ,error para ser mas especifico*/
  .catch((error) => console.error("camino triste"));
