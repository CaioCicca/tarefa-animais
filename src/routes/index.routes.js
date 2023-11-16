import { Router } from "express";
import rotaAnimais from "./animais.routes.js";

const rota = Router()

rota.use("/animais", rotaAnimais)

rota.get("/", (req, res) => {
    return res.status(200).send({message: "Servidor OK!"})
});

export default rota;