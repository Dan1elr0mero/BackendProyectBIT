import bcrypt from "bcrypt";

import Usuario from "../modelos/modelos.js";
import { generarToken, verificarToken } from "../helpers/funciones.js";

const DriverLogin = {
  loginUser: async (request, response) => {
    try {
      const { nombre, nombreUsuario, contrasenia } = request.body;
      const UserFound = await Usuario.findOne({ nombreUsuario });
      if (UserFound) {
        const contrseniaValida = await bcrypt.compare(
          contrasenia,
          UserFound.contrasenia
        );
        if (contrseniaValida) {
          const token = await generateToken({
            id: UserFound._id,
            nombre: UserFound.nombre,
          });
          response.json({
            result: "good",
            message: "token",
            data: token,
          });
        } else {
          response.json({
            result: "bad",
            message: "Nombre de usurio o contraseña incorrectas",
            data: null,
          });
        }
      } else {
        response.json({
          result: "bad",
          message: "Nombre de usurio o contraseña incorrectas",
          data: null,
        });
      }
    } catch (error) {
      response.json({ result: "good", message: "error", data: error });
    }
  },
  validarToken: async (request, response) => {
    try {
      const token = solicitud.params.token;
      const decodificado = await verificarToken(token);
      if (decodificado.id) {
        respuesta.json({
          resultado: "bien",
          mensaje: "válido",
          datos: decodificado,
        });
      }
    } catch (error) {
      respuesta.json({
        resultado: "mal",
        mensaje: "ocurrió un error",
        datos: error,
      });
    }
  },
};

export default DriverLogin;
