let comp = 0

// Pré-requisito para a busca-binária: o conjunto de dados PRECISA estar ordenado pelo critério de busca

// IMPLEMENTAÇÃO RECURSIVA:
// Uma função chama a si mesma, com pelo menos um de seus parâmetro com valor alterado
// Toda a função recursiva precisa ter pelo menos uma condição de saída, isto é, uma possibilidade de término
// que não envolve uma chamada a ela mesma.
// Os parâmetros inicio e fim são OPCIONAIS. Caso a função seja chamada sem especificá-las
// elas assumirão os valores indicados
// Primeiro parâmetros OBRIGATÓRIOS, depois OPCIONAIS, podemos ter só um ou outro tipo.
function buscaBinaria(lista, valorBusca, fnComp, inicio = 0, fim = lista.length - 1) { // deixando o usuário indicar o inicio e o fim
    
    if(fim >= inicio) { // o while é substituído, pois passa a executar somente uma vez, e resetar com a função recursiva
        // Math.floor tira as casas decimais de um número, arredondando para baixo
        let meio = Math.floor((fim + inicio) / 2)

        let res = fnComp(lista[meio], valorBusca)

        // Verificar se o valor na posição é o valor da busca
        if(res == 0) {
            comp++
            return meio // condição de saída
        }
        else if(res < 0) {
            comp += 2
            //fim = meio - 1
            return buscaBinaria(lista, valorBusca, fnComp, inicio, meio - 1)
        }
        else { // res > 0
            comp += 2
            //inicio = meio + 1
            return buscaBinaria(lista, valorBusca, fnComp, meio + 1, fim)
        }
    }
    return -1 // Valor não encontrado
    // condição de saída
}


function comparaNome(obj, valorBusca) {
    // Os dois valores são iguais
    if(valorBusca === obj.first_name) return 0 // Igualdade
    // Um número negativo para indicar que o primeiro é < que o segundo
    else if(valorBusca < obj.first_name) return -1 // Menor que
    // Um número para indicar que o primeiro é > que o segundo
    else return 1 // vlorBusca > obj.first_name
}

let nums = [4, 16, 22, 29, 35, 44, 52, 58, 66, 71, 80, 88, 94]

console.log('xxxxxxxxxxx RECURSIVA xxxxxxxxxxxxxx')

console.log(buscaBinaria(nums, 66, (elpos, busca) =>{
    if(busca === elpos) return 0
    else if (busca < elpos) return -1
    else return 1
})) // posso passar ou NÃO os parâmetros DE INICIO E FIM pois na função chamada estão como OPCIONAIS

// Termina a execução sem passar pelas linhas abaixo
//process.exit(0) // 0 = saindo ok, sem erros

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

