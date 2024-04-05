import { Router } from "express";
import DriverLogin from "../Drivers/driverlogin.js";
const routerLogin = Router();

routerLogin.post("/", DriverLogin.loginUser);

export default routerLogin;
