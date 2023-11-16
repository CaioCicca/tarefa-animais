import ListaAnimais from "../models/ListaAnimais.js";
import Animais from "../models/Animais.js";

const lista = new ListaAnimais()

function verificarFoto(url) {
    if (url.match(/\.(jpeg|jpg|gif|png)$/) != null) {
        return true;
    } else {
        return false;
    }
}

export const buscarTodosAnimais = (req, res) => {
    let animais = lista.getAllAnimais();
    const tipo = req.query.tipo;

    if (tipo) {
        animais = lista.getAnimaisByType(tipo);
    } else {
        animais = lista.getAllAnimais();
    }

    if (!animais) {
        return res.status(404).send({
            message: "Nenhum animal encontrado",
            error: "Not Found"
        })
    }

    return res.status(200).send({ message: 'Todos os animais via controller', status: 'OK', cadastrados: animais.length, data: animais })
};

export const buscarAnimaisPorId = (req, res) => {
    const { id } = req.params
    const animal = lista.getAnimaisById(id);
    if (!animal) {
        return res.status(404).send({ message: 'Animal não encontrado', Origem: 'Controller', status: 'Not Found' })
    }
    return res.status(200).send({ menssage: `Animal com ID ${id}`, Origem: 'Controller', data: animal })
};

export const criarAnimal = (req, res) => {
    const { nome, tipo, idade, cor, imagem, vacina } = req.body;
    let contador = 0
    let errors = [];

    if (nome == "" || nome.length < 3 || nome.length > 50) {
        errors.push("Nome incorreto");
        contador++
    }

    if (idade == "" || typeof idade !== 'number') {
        if (idade < 0 || Number.isInteger(idade)) {
            errors.push("Idade incorreta");
            contador++
        }
    }

    if (tipo == "" || tipo.length > 30) {
        errors.push("Tipo incorreto");
        contador++
    }

    if (cor == "" || cor.length > 20) {
        errors.push("Cor incorreta");
        contador++
    }

    if (vacina == "" || typeof vacina !== 'boolean') {
        errors.push("Vacinacao incompativel com as opcoes");
        contador++
    }

    if (imagem == "" || !verificarFoto(imagem)) {
        errors.push("Imagem incorreta");
        contador++
    }

    const animal = new Animais(nome, tipo, idade, cor, imagem, vacina)

    if (contador == 0) {
        lista.createAnimais(animal)
        return res.status(201).send({ message: "Rota POST animal", origem: 'Controller', data: animal })
    } else {
        return res.status(404).send({ message: errors, Origem: 'Controller', status: 'Not Found' })
    }
};

export const editarAnimalPorId = (req, res) => {
    const { id } = req.params
    const { nome, tipo, idade, cor, imagem, vacina } = req.body;
    let contador = 0
    let errors = [];

    if (nome == "" || nome.length < 3 || nome.length > 50) {
        errors.push("Nome incorreto");
        contador++
    }

    if (idade == "" || typeof idade !== 'number') {
        if (idade < 0 || Number.isInteger(idade)) {
            errors.push("Idade incorreta");
            contador++
        }
    }

    if (tipo == "" || tipo.length > 30) {
        errors.push("Tipo incorreto");
        contador++
    }

    if (cor == "" || cor.length > 20) {
        errors.push("Cor incorreta");
        contador++
    }

    if (vacina == "" || typeof vacina !== 'boolean') {
        errors.push("Vacinacao incompativel com as opcoes");
        contador++
    }

    if (imagem == "" || !verificarFoto(imagem)) {
        errors.push("Imagem incorreta");
        contador++
    }

    let kkkkkkk = lista.getAnimaisById(id);

    if (!kkkkkkk) {
        return res.status(400).send({
            error: "Error",
            status: 'Not Found'
        })
    }
    if (contador == 0) {
        lista.updateAnimais(id, nome, tipo, idade, cor, imagem, vacina);
        return res.status(201).send({ message: "Rota PUT animal", origem: 'Controller', data: kkkkkkk })
    } else {
        return res.status(404).send({ Origem: 'Controller', status: 'Not Found' })
    }
};

export const deletarAnimalPorId = (req, res) => {
    const { id } = req.params

    const animal = lista.getAnimaisById(id)

    if (!animal) {
        return res.status(404).send({ message: 'Animal não encontrado', Origem: 'Controller', status: 'Not Found' })
    }

    lista.removeAnimais(id);
    return res.status(201).send({ message: `Rota DELETE Animal com ID ${id}`, data: animal })
};