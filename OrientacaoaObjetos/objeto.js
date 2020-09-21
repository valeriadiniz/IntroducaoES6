function Pessoa(name){
    this.name = name;
}

Pessoa.prototype.chorar = function(){}

const p = new Pessoa('Valeria');

console.log(p);

function Sentimento(sofre){
    Pessoa.call(this, 1);

    this.sofre = sofre;
}

Sentimento.prototype = Object.create(Pessoa);
const tristeza = new Sentimento(false);

console.log(tristeza);