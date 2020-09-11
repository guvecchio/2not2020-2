
/*
    Algoritmo de ordenação Bublle Sort

    Estratégia:
    Perrcorrer o vetor de dados, comparando elementos adjacentes e
    promovendo a troca quando o sucessor é maior que o antecessor.

    O percurso do vetor é feito tantas vezes quanto necessário, até que nenhuma troca
    seja efetuada no percurso.
*/

function BublleSort(vetor) {
    let passadas = 0, comparacoes = 0, totalTrocas = 0
    let trocas
    do {
        passadas++
        trocas = 0

        // Percurso do cetor até a PENÚLTIMA POSIÇÃO (length - 2)
        for(let i = 0; i <= vetor.length - 2; i++) {
            comparacoes++
            // Comprando o elemento da posição atual (i) com o elemento da frente (i + 1)
            if(vetor[i] > vetor[i + 1]) {
                // Comparando o elemento da posição atual (i) com o elemento da posição da frente (i + 1)
                [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]]
                trocas++
                totalTrocas++
            }
        }
    } while (trocas > 0)
    // Exibindo as estatíticas
    console.log({passadas, comparacoes, totalTrocas})
}

let nums = [58, 16, 33, 82, 4, 47, 25, 71, 96, 60, 41, 89]

console.time("TESTE1")
BublleSort(nums)
console.timeEnd("TESTE1")

console.log(nums)


/* let empresas = require('./dados/15-mil-empresas')

console.time("TESTE-EMPRESAS")
BublleSort(empresas)
console.timeEnd("TESTE-EMPRESAS")

console.log(empresas) */

let nomes = require('./dados/100-mil-nomes')

console.time("TESTE-NOMES")
BublleSort(nomes)
console.timeEnd("TESTE-NOMES")

console.log(nomes)