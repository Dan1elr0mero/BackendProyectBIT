import bcrypt from "bcrypt";
import Usuario from "../modelos/modelos.js";
//CRUD : Create ,Read,Update,Delate => Crear,Leer,Actualizar,Eliminar
const ControladorUsuarios = {
  CrearUsuario: async (request, response) => {
    /* si no ponemos async no se puede ver por que es una funcion asincrona*/
    try {
      console.log(request.body);
      const { nombre, nombreUsuario, contrasenia } = request.body;
      const hashContrasenia = await bcrypt.hash(contrasenia, 10);
      //   el metodo .json crea lo que esta dentro de los parentesis como un archivo json
      /*el .save envia el usuario a la base de datos "atlas" .body se usa para ver lo que esta llegando de postman */
      const nuevoUsuario = new Usuario({
        nombre: nombre,
        nombreUsuario: nombreUsuario,
        contrasenia: hashContrasenia,
      });
      const UsuarioCreado = await nuevoUsuario.save();
      if (UsuarioCreado._id) {
        response.json({
          result: "good",
          message: "usuario creado",
          data: UsuarioCreado,
        });
      } else {
        throw new Error("Usuario no creado");
      }
    } catch (error) {
      response.json({ result: "good", message: "error", data: error });
    }
  },
  leerUsuarios: async (request, response) => {
    try {
      const todosLosUsuarios =
        await Usuario.find(); /*el await se usa por que es una funcion asincrona sin no se usa no funciona*/
      response.json({
        result: "good",
        message: "All users",
        data: todosLosUsuarios,
      });
    } catch (error) {
      response.json({ result: "bad", message: "error", data: error });
    }
  },
  leerUsuario: async (request, response) => {
    try {
      /*para aceder a la idi creada se acede a request es lo que yo estoy pidiendo una peticion es un objeto por eso se usa el .*/
      const UsuarioBuscado = await Usuario.findById(request.params.id);
      response.json({ result: "good", message: "user", data: UsuarioBuscado });
    } catch (error) {
      response.json({ result: "bad", message: "error", data: error });
    }
  },
  actualizarUsuarios: async (request, response) => {
    try {
      const UsuarioAActualizar = await Usuario.findByIdAndUpdate(
        request.params.id,
        request.body
      );
      response.json({
        result: "good",
        message: "Update",
        data: UsuarioAActualizar,
      });
    } catch (error) {
      response.json({ result: "bad", message: "error", data: error });
    }
  },
  eliminarUsuarios: async (request, response) => {
    try {
      const deleted = await Usuario.findByIdAndDelete(request.params.id);
      response.json({ result: "good", message: "Delated", data: delated });
    } catch (error) {
      response.json({ result: "bad", message: "error", data: error });
    }
  },
};
export default ControladorUsuarios;
