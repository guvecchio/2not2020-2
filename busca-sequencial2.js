// Busca sequencial
// Parâmetros:
// 1º: Lista de itens a ser sequenciado
// 2º: Valor a ser pesquisado
// Retorno:
// A posição da lista onde foi encontrado o valor pesquisado OU
// O valor convencionado -1 caso o valor buscado não tenha sido encontrado

function buscaSequencial(lista, valorBusca, fnComp){
    for(let i = 0; i < lista.length; i++){
        // Encontrou o que está buscando: retorna a posição em que foi encontrado
        if(lista[i] === valorBusca) return i
        if(fnComp(lista[i], valorBusca)) return i
    }
    return -1 // valorBusca não foi encontrado em lista
}


// O esquema module.exports + require() só funciona em JS para ser executado no Node.
// Não funciona em JS dentro de HTML
const listaNomes = require('./dados/lista-nomes')

function comparaNome(obj, nome){
    // Retorna true se o atributo first_name do objeto for igual nome
    return obj.first_name === nome
}

console.time('FAUSTO')
console.log(buscaSequencial(listaNomes, 'FAUSTO', comparaNome))

console.log('')

console.log(buscaSequencial(listaNomes, 'FAUSTO', (obj, nome) => obj.first_name === nome))
console.timeEnd('FAUSTO')

console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')

console.time('10000+')
// Encontrar o primeiro nome da lista que possui mais de 10000 pessoas registradas com ele
let pos = buscaSequencial(listaNomes, 10000, (obj, valor) => obj.frequency_total > valor) // função de callback
// Exibe o objeto da posição encontrada e depois a própria posição
console.log(listaNomes[pos], pos)
console.timeEnd('10000+')

console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')

