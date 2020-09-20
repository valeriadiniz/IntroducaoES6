//hoisting de variáveis

/**
 
function hn() {
    console.log(text);

    var text = 'Exemplo';

    console.log(text);
}

hn();
// retorna "undefined" "exemplo"
*/

//hoisting de função

function hn() {
    log('Hoisting de função');

    function log(value) {
        console.log(value);
    }
}

hn();
//retorna "Hoisting de Função" neste caso ele permite que chame a função antes de criar ela