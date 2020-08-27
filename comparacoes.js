// Comparando dois números distintos
let a = 10, b = 7
console.log(a > b)
console.log(b > a)

console.log('............................................')

// Comparação binária
// Cada caractere tem uma representação numérica
// letras acentuadas vem depois de todas as outras
//let x = 'ábacaxi', y = 'jabuticaba'
//console.log(x > y)
//console.log(y > x)

// Comparando duas strings sitintas
// Considera a ordem das letras no alfabeto
let x = 'abacaxi', y = 'jabuticaba'
console.log(x > y)
console.log(y > x)

console.log('............................................')

// Comparando dois objetos
// JS só compara grandezas comparáveis - não compara objeto
let carro1 = {modelo: 'Fusca', marca: 'Volkswagen', ano: 1969}
let carro2 = {modelo: 'Palio', marca: 'Fiat', ano: 2011}
console.log(carro1 > carro2)
console.log(carro2 > carro1)
console.log(carro1 == carro2)

// Comparando booleanos
console.log(true > false)
console.log(false > true)

// MORAL DA HISTÓRIA: Tipos de dados comparáveis em JS são apenas:
// - number
// - string
// - boolean

