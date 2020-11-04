
/*
    
    Adaptando o algoritmo Bubble Sort para operar com vetor de objetos.

    1) Acrescentar um novo parâmetro, que vai corresponder à função de comparação (fnComp).
    2) Essa função será chamada dentro do BubbleSort(), recebendo o elemento da posição e da
    posição seguinte como parâmetros.
    Ela deve retornar true caso o primeiro parâmetro seja maior que o segundo, ou false caso contrário.

*/

function BublleSort(vetor, fnComp) {
    let passadas = 0, comparacoes = 0, totalTrocas = 0
    let trocas
    do {
        passadas++
        trocas = 0

        // Percurso do vetor até a PENÚLTIMA POSIÇÃO (length - 2)
        for(let i = 0; i <= vetor.length - 2; i++) {
            comparacoes++
            // Comprando o elemento da posição atual (i) com o elemento da frente (i + 1)
            //if(vetor[i] > vetor[i + 1]) {

            //mudando para fnComp para comparar o parâmetro escolhido do objeto
            if(fnComp(vetor[i], vetor[i + 1])) {

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

/*
    Quando preciso visualizar quais as propriedades do meu objeto. Aqui eu 
    seleciono apenas o primeiro objeto do vetor, candidatos[0].

for(let prop in candidatos[0]){
    console.log(prop)
}
process.exit(0) // usado para não executar daqui para baixo.
*/

const candidatos = require('./dados/candidatos-2018')


console.time('TESTE CANDIDATOS')
BublleSort(candidatos, (a, b) => a.NM_CANDIDATO > b.NM_CANDIDATO)
console.timeEnd('TESTE CANDIDATOS')


console.log(candidatos)

/*

MELHOR DOCUMENTAÇÃO PARA JS MDN (Mozilla Developer Network)

Fazedo um map() para produzir um novo vetor só com os nomes dos candidatos.

const nomesCandidatos = candidatos.map(o => o.NM_CANDIDATO)
console.log(nomesCandidatos)

    Teste com o localeCompare()
    Só oos primeiros 1000 candidatos

const cadidatos1000 = candidatos.slice(0, 999)

console.time('TESTE CANDIDATOS 1000')
// localeCompare() faz corretamente a ordenação considerando os acentos, mas é muito mais lento do que
// a comparação binária padrão.
BublleSort(candidatos1000, (a, b) => a.NM_URNA_CANDIDATO.localeCompare(b.NM_URNA_CANDIDATO, 'pt-BR') < 0)
console.timeEnd('TESTE CANDIDATOS 1000')

console.log(candidatos)

*/

// PRINCIPAL PROBLEMA DO bubbleSort - Troca mal, por isso troca muito.