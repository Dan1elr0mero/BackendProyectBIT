import jwt from "jsonwebtoken";
function generateToken(payload) {
  return new Promise((resolver, rechazar) => {
    jwt.sign(payload, "llave", { expiresIn: "1h" }, (error, token) => {
      if (error) {
        rechazar({ error });
      } else {
        resolver({ token });
      }
    });
  });
}
export default generateToken;
