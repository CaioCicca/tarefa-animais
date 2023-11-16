import { Router } from "express";
import {
    buscarAnimaisPorId,
    buscarTodosAnimais,
    criarAnimal,
    deletarAnimalPorId,
    editarAnimalPorId,
} from "../controllers/animais.controller.js";


const rotaAnimais = Router();

rotaAnimais.get("/" ,  buscarTodosAnimais);

rotaAnimais.get("/:id" , buscarAnimaisPorId);

rotaAnimais.post("/" , criarAnimal);

rotaAnimais.put("/:id" , editarAnimalPorId);

rotaAnimais.delete("/:id", deletarAnimalPorId);

export default rotaAnimais;