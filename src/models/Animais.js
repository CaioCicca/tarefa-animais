import {v4 as uuidv4} from "uuid"

export default class Animais {
    constructor(nome, tipo, idade, cor, imagem, vacina) {
        this.nome = nome;
        this.tipo = tipo;
        this.idade = idade;
        this.cor = cor;
        this.imagem = imagem;
        this.vacina = vacina;
        this.id = uuidv4()
    }
}