let tales = 'Tales'
console.log(tales.length)

console.log(tales.charAt(1))
console.log(tales[0])

console.log(tales.concat(' Félix'))

console.log(tales.indexOf('s'))
console.log(tales.indexOf('z'))
console.log( tales.lastIndexOf('s'))

console.log(tales.replace('s', 'x'))

console.log(tales.slice(2, 4)) // retorna do 2 ao 4

console.log(tales.split('l')) // quebra no l e remove o l, cria um novo array
console.log(tales.split('l').join('l'))

console.log(tales.substring(2, 5))
console.log(tales.substring(5, 2))

console.log(tales.toLowerCase())
console.log(tales.toLocaleUpperCase())

tales = 'tales'
console.log(tales.charAt(0).toUpperCase() + tales.slice(1))