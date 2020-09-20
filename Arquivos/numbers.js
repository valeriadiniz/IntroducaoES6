const myNumber = 314.003;

//Transformar número para string
const numberAsString = myNumber.toString();
console.log('Número Transformado em string: ', typeof numberAsString);

//Retorna número com um número de casas decimais
const fixedTwoDecimais = myNumber.toFixed(2);
console.log('\nNúmero com duas casas decimais: ', fixedTwoDecimais);

//Transformar uma string em float
console.log('\nString parseada para float: ', parseFloat('13.22'));

//Transforma uma string em int
console.log('\nString parseada para int: ', parseInt('13.20'));