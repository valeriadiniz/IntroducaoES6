//consegue abilitar uma forma de que as propriedades não sejam subesctrias 
//com estruturas padrão do javascript ele não pode ser acessado
//ele também não vai exibir no object keys

const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');

const user = {
    [nameSymbol1]: 'Valeria',
    [nameSymbol2]: 'Diniz'
}

console.log(user);

//ele se torna bem prático ao criar um enum
//As enum representam um conjunto fixo de valores, de uma forma mais ou menos autodocumentada. 
//Tornam o código mais explícito, mais legível, e menos vulnerável a erros de programação. 

const directions = {
    UP : Symbol('UP'),
    DOWN : Symbol('DOWN'),
    LEFT : Symbol('LEFT'),
    RIGHT : Symbol('RIGHT')
}

console.log(directions);