export default class ListaAnimais {
    constructor(){
        this.animais = [];
    }

    getAllAnimais() {
        return this.animais;
    }

    getAnimaisById(id){
        return this.animais.find((animal) => animal.id == id);
    }

    createAnimais(animais) {
        this.animais.push(animais);
    }

    updateAnimais(id, nome, tipo, idade, cor, imagem, vacina) {

        console.log(id, nome, tipo, idade, cor, imagem, vacina)
    
        const animais = this.getAnimaisById(id);

        console.log(animais);

        if (animais) {
            animais.nome = nome;
            animais.tipo = tipo;
            animais.idade = idade;
            animais.cor = cor;
            animais.imagem = imagem;
            animais.vacina = vacina;
        }

   
        return animais;
    }

    removeAnimais(animaisId) {
        this.animais = this.animais.filter(animais => {
            animais.id !== animaisId
        });
    }

    getAnimaisByType(tipo){
        return this.animais.filter((animal) => animal.tipo == tipo);
    }
}