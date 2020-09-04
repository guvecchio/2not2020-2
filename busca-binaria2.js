let comp = 0

// Pré-requisito para a busca-binária: o conjunto de dados PRECISA estar ordenado pelo critério de busca
function buscaBinaria(lista, valorBusca, fnComp) {
    let inicio = 0
    let fim = lista.length -1
    
    while(fim >= inicio) {
        // Math.floor tira as casas decimais de um número, arredondando para baixo
        let meio = Math.floor((fim + inicio) / 2)

        let res = fnComp(lista[meio], valorBusca)

        // Verificar se o valor na posição é o valor da busca
        if(res == 0) {
            comp++
            return meio
        }
        else if(res < 0) {
            comp += 2
            fim = meio - 1
        }
        else { // res > 0
            comp += 2
            inicio = meio + 1
        }
    }
    return -1 // Valor não encontrado
}


function comparaNome(obj, valorBusca) {
    // Os dois valores são iguais
    if(valorBusca === obj.first_name) return 0 // Igualdade
    // Um número negativo para indicar que o primeiro é < que o segundo
    else if(valorBusca < obj.first_name) return -1 // Menor que
    // Um número para indicar que o primeiro é > que o segundo
    else return 1 // vlorBusca > obj.first_name
}


let listaNomes = require('./dados/lista-nomes')

console.time('FAUSTO')
console.log(buscaBinaria(listaNomes, 'FAUSTO', comparaNome))
console.timeEnd('FAUSTO')
console.log('Comparações: ', comp)

console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')

console.time('ENEDINO')
console.log(buscaBinaria(listaNomes, 'ENEDINO', (obj, busca) => {
    if(busca == obj.first_name) return 0
    else if(busca < obj.first_name) return -1
    else return 1
}))
console.timeEnd('ENEDINO')
console.log('Comparações: ', comp)

console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')