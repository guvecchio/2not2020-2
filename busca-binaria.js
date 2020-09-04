
let comp = 0

// Pré-requisito para a busca-binária: o conjunto de dados PRECISA estar ordenado pelo critério de busca
function buscaBinaria(lista, valorBusca) {
    let inicio = 0
    let fim = lista.length -1
    
    while(fim >= inicio) {
        // Math.floor tira as casas decimais de um número, arredondando para baixo
        let meio = Math.floor((fim + inicio) / 2)

        // Verificar se o valor na posição é o valor da busca
        if(valorBusca === lista[meio]) {
            comp++
            return meio
        }
        else if(valorBusca < lista[meio]) {
            comp += 2
            fim = meio - 1
        }
        else { // valorBusca > lista[meio]
            comp += 2
            inicio = meio + 1
        }
    }
    return -1 // Valor não encontrado
}

let vetorNomes = require('./dados/vetor-nomes')

console.time('FAUSTO')
console.log(buscaBinaria(vetorNomes, 'FAUSTO'))
console.timeEnd('FAUSTO')
console.log('Comparações: ', comp)

console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')

comp = 0

console.time('ZOZIMO')
console.log(buscaBinaria(vetorNomes, 'ZOZIMO'))
console.timeEnd('ZOZIMO')
console.log('Comparações: ', comp)

console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')

comp = 0

console.time('INSTAGRAMILDA')
console.log(buscaBinaria(vetorNomes, 'INSTAGRAMILDA'))
console.timeEnd('INSTAGRAMILDA')
console.log('Comparações: ', comp)

console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')

comp = 0

console.time('MARIA')
console.log(buscaBinaria(vetorNomes, 'MARIA'))
console.timeEnd('MARIA')
console.log('Comparações: ', comp)

console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')