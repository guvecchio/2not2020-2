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

console.log('............................................')

console.log(aleatorio())

console.log('............................................')

// ARROW FUNCTION com 0 argumento
let aleatorio2 = () => Math.floor(Math.random() * 1000)


// Situação alternativa 2: Função com mais de um argumento

// Função tradicional com 1+ argumentos
// Os parenteses dos argumentos são obrigatórios quando o número de argumentos é maior > 1
let imc = function(peso, altura){
    return peso / (altura ** 2)
}

console.log(imc(87, 1.78))

console.log('............................................')

let imc2 = (peso, altura) => peso / (altura ** 2)

console.log(imc2(87, 1.78))

console.log('............................................')

// CONCLUSÃO: os parâmetros só podem ser omitidos da lista de argumentos de uma ARROW FUNCTION quando há UM e 
// apenas um argumento.

// Situação alternativa 3: funções com mais de uma linha no corpo

// Função tradicional
let fatorial = function(n){
    let res = 1
    for(let i = n; i > 1; i--){
        res *= i
    }
    return res
}

//Arrow Function com corpo maior que uma linha

let fatorial2 = n => {
    let res = 1
    for(let i = n; i > 1; i--){
        res *= i
    }
    return res
}

console.log(fatorial(5))
console.log(fatorial2(5))

