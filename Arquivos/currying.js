//transformar uma função com n parâmetros em apenas uma e pra cada parãmetro retornar uma nova função

function soma(a){
    return function(b) {
        return a + b;
    }
}

const soma2 = soma(2);

console.log(soma2(2));
console.log(soma2(3));
console.log(soma2(4));
console.log(soma2(5));
