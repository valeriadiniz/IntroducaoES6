function fn() {
    return 'Code Here';
}

const arrowFn = () => 'Code Here';
const arrowFn2 = () => {
    //Quando houver mais de uma expressão inserir o return
    return 'Code Here';
}

// Funções também são objetos
fn.prop = 'Propriedade Nova';

console.log(fn());
console.log(fn.prop);

//Receber Parâmetros
const logValue = value => console.log(value);
const logFnResult = fnParam = console.log(fnParam());

logFnResult(fn); 