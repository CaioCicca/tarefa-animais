import { Router } from "express";

const rota = Router()

rota.use()

rota.get("/", (req, res) => {
    return res.status(200).send({message: "Servidor OK!"})
});

export default rota;