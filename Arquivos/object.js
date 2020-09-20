//let user = {
 //   name: 'Valeria'
//};

//Alterando a propriedade de um objeto
//console.log(user);

//user.name = 'Outro nome 1';
//console.log(user);
//user['name'] = 'Outro nome 2';

//console.log(user);
//const prop = 'name';
//user[prop] = 'Outro nome 3';

//console.log(user);

//Criando uma propriedade ´
//user.lastName = 'dos Santos Diniz';

//Deletando uma propriedade 
//delete user.name;

let newObj = {
   foo: 'bar'
};

//Object.freeze(newObj);
Object.seal(newObj); //altera mas deletar e criar não
console.log(newObj);

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo';

console.log('\nVariável newobj após as alterações: ', newObj);