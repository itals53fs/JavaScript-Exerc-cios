/*
//Capturas e negações
/\d/ /\D/ // Dígitos 0 a 9
/\w/ /\W/ // letras de A-Za-z
/\s/ /\S/ // Espaço em braco
/./ // Qualquer caracter que não seja quebra de linha
/\t/ // tabulacão
/\n/ // quebra de linha
/()()/ /*grupos*/ '$1$2' /*
/[12]/ // lista 1 ou 2
/(1|2)/ // grupo 1 ou 2
/[^]/ // negação, em funciona em uma lista
/+/ // reprtido 
/{5}{2,4}{2,}{,10}/ // exatamente 5, de 2 a 4, no minimo 2, no maximo 10
*/

console.log ('Eu sou tales'.replace('t', 'T'));

let capLetras = '\w'.match(/\w/g)
console.log(capLetras)
