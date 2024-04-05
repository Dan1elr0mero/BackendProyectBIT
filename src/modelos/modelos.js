import { Schema, model } from "mongoose";

const esquemaDeUsuario = new Schema(
  {
    nombre: {
      type: String,
      required: true,
    } /*con esto se pone si es obligatorio  required: true */,
    nombreUsuario: { type: String, required: true },
    contrasenia: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

export default model("Usuario", esquemaDeUsuario);
