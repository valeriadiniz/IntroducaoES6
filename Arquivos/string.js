//retorna o tamnho de uma string
const textSize = 'Texto'.length;
console,console.log(`Quantidade de letras: ${textSize}`);

//retorna um array quebrando a string por um delmitador
const splittedText = 'Texto'.split('x');
console,console.log(`\nArray com as posições separadas pelo delimitador:, ${splittedText}`);

//Busca por um valor e substitui por outro
const replacedText = 'Texto'.replace('Text', 'txeT');
console,console.log(`\nSubstituição de valor:, ${replacedText}`);

//Retorna a "falta" de um valor
const lastChar = 'Texto'.slice(-1);
console.log('\nÚltima letra de uma string: ', lastChar);

const allWithoutLastChar = 'Texto'.slice(0, -1);
console.log('\nValor da string da primeira letra menos a última: ', allWithoutLastChar);

const secondToEnd = 'Texto'.slice(1);
console.log('\nValor da string da segunda letra até a última: ', secondToEnd);

//Retorna N caracteres a partir de uma posição
const twoCharsBeforeFirstPos = 'Texto'.substr(0,2);
console.log('\nAs duas letras primeiras são: ', twoCharsBeforeFirstPos)

