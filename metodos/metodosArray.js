let vetor = [1,2,3, 'tales', function(a){ return a}]
vetor.push('natalia') // add no array
console.log(vetor)
vetor.pop() // remove no final, e retorna
console.log(vetor)
vetor.join() // junta em uma string e separa por elemento
console.log(vetor.join('.'))
vetor.reverse() // modifica o array principal, reverte
vetor.sort() // ordena em ordem alfabética
vetor.unshift('a')  // add na primeira posição
console.log(vetor)
vetor.shift() // remove na primeira posição
console.log(vetor)
console.log(Object.values(vetor))
vetor.concat(10) // concatena o elemento no array e não o modifica
vetor.toString() //coverte para String
vetor.slice() // pedaço do array
console.log(vetor.slice(1,4))
vetor.splice() //modifica o array principal, add e remuve
console.log(vetor.splice(4)) //remove aparti do 4
console.log(vetor)
vetor.push('tales')
console.log(vetor.splice(2,2)) //remove aparti do 2 ao 2 elementos
console.log(vetor)
vetor.splice(1,0, 'a') // apartir do indice 1 remove nada e add 'a'
console.log(vetor)
vetor.splice(1,1, 2) // apartir do indice 1 remove um elemento e add o '2'
console.log(vetor)

console.log(vetor.indexOf(1)) // verifica de exite o elemneto e retorna deu indice
vetor.indexOf('a', 4) // se existe 'a' depois do indice 4
vetor.lastIndexOf('a') // começa a pesquisa do final
vetor.lastIndexOf('a', 4) // faz exatamente a mesma coida do 2° acima

console.log(Array.isArray(vetor)) // verifica se é um array. true oh false


vetor.forEach(element => {
    
});

vetor.forEach((item, index, array) => {
    
});

vetor.map((item, index, array)=>{

});

vetor.filter((item, index, array)=>{

});

vetor.some(element=>{

});

vetor.every(element=>{

});

vetor.reduce((acum, atual, index, array)=>{

});

vetor.reduceRight((acum, atual, index, array)=>{

})

