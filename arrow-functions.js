// Expressão de função "tradicional"

// Características desta função
// - Um único argumento
// - Seu corpo tem apenas uma linha de código com return

let quadrado = function(n){
    return n * n
}

console.log(quadrado(6))

console.log('............................................')

// A função tradicional acima pode ser transformada em uma ARROW FUNCTION
// - Desaparece a palavra function
// - O argumento não precisa de parenteses
// - Após o argumento há a flexa (arrow) =>
// - As chaves e a palavra return são omitidos

let quadrado2 = n => n * n

console.log(quadrado(6))
console.log(quadrado2(6))

console.log('............................................')

// Situação alternativa 1: função sem argumento

// Retorna um número aleatório entre 0 e 99
let aleatorio = function(){
    // Math.random() -> gera um número aleatório entre 0 e 1 (fracionário)
    // Math.floor() -> "corta fora" as casas decimais de um número
    let x = Math.random()
    console.log(x)
    return Math.floor(Math.random() * 1000)
}

console.log(aleatorio())

// ARROW FUNCTION com 0 argumento
let aleatorio2 = () => Math.floor(Math.random() * 1000)


