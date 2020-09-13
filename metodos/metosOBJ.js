const obj = {
    X: 2,
    y: 3,
    name: 'tales',
    incremento(num){
        return num++
    },
    decremento: (num)=> num--,
}

// metodos
Object.keys(obj) // retorma os atributos
Object.keys(obj).length // retorna a quantiddaes de atributos
console.log(Object.keys(obj))
console.log(Object.keys(obj).length)

obj.isPrototypeOf() // verifica se o obj é prototipo de outro objeto
console.log(obj.isPrototypeOf(Object))

let str = JSON.stringify(obj) // converte para uma string
console.log(str)
str = JSON.parse(str) // converte para obj
console.log(str)

Object.values(obj) // retorna apnas os valores
console.log(Object.values(obj))

var obj1 = new Object();
obj1.name = "itals";
obj1.lastName = 'F'
console.log('obj1', obj1);
var obj2 = Object.create(obj1); // erda as propriedades de obj1
console.log('obj2', obj2, obj2.name )
console.log(obj2.hasOwnProperty('name')) // verifica se exite a propriedade mo obj

console.log(obj.isPrototypeOf((Object())))