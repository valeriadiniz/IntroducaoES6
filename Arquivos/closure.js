function init() { //função retornando outra função utilizando o valor exemplo em uma cadeia de execução
    const exemplo = "Essa variável";

    return function () {//boas práticas 'funções puras' o ideal seria colocar o parâmetro assim 'function (exemplo)'
        console.log(`1 - O valor da variável exemplo é: ${exemplo}.`);

        return function () {
            console.log(`2 - O valor da variável exemplo é: ${exemplo}.`);

            return function () {
                console.log(`3 - O valor da variável exemplo é: ${exemplo}.`);

            }
        }
    }
}

const initFn1 = init();

const initFn2 = initFn1();

const initFn3 = initFn2();

initFn3();

//para chamar todas as funções de uma vez só

//init()()()();