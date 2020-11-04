
// SelectionSort para ordenação dos registro da lista de objetos contidas no arquivo covid-19.js;
// Ordenados por date, state e city;
// amostras de 1000, 25000, 100000 e todos os registro.
// tempo gasto;
// quatidade de memória usada.

function selectionSort(vetor, fnComp) {
    function encontrarMenor(vetor, inicio) {
        let posMenor = inicio
        for(let i = inicio + 1; i < vetor.length; i++) {
            if(! fnComp(vetor[i], vetor[posMenor])) posMenor = i
        }
        return posMenor
    }
    for(i = 0; i < vetor.length - 1; i++) {
        posMenor = encontrarMenor(vetor, i + 1)
        if(fnComp(vetor[i], vetor[posMenor])) {
            [vetor[posMenor], vetor[i]] = [vetor[i], vetor[posMenor]]
        }
    }
}

const covid19 = require('./dados/covid-19')

/*

// ************COM 1000 REGISTROS DE AMOSTRA************
const covid1000 = covid19.slice(0, 999)

console.time('COVID1000')

selectionSort(covid1000, (a, b) => {
    if(a.date == b.date) {
        if(a.state > b.state) return true
        else if (a.state == b.state)
            if(a.city > b.city) return true
            else return false
    }
    else if(a.date > b.date) return true
    else return false
})

console.log(covid1000)

console.timeEnd('COVID1000')
console.log('Memória usada (MB):', process.memoryUsage().heapUsed / 1024 / 1024)

console.log("xxxxxxxxxxxxxxx FIM COM 1000 SelectionSort xxxxxxxxxxxxxxx")

// ************COM 25000 REGISTROS DE AMOSTRA************
const covid25000 = covid19.slice(0, 24999)

console.time('COVID25000')

selectionSort(covid25000, (a, b) => {
    if(a.date == b.date) {
        if(a.state > b.state) return true
        else if (a.state == b.state)
            if(a.city > b.city) return true
            else return false
    }
    else if(a.date > b.date) return true
    else return false
})

console.log(covid25000)

console.timeEnd('COVID25000')
console.log('Memória usada (MB):', process.memoryUsage().heapUsed / 1024 / 1024)

console.log("xxxxxxxxxxxxxxx FIM COM 25000 SelectionSort xxxxxxxxxxxxxxx")

// ************COM 100000 REGISTROS DE AMOSTRA************

const covid100000 = covid19.slice(0, 99999)

console.time('COVID100000')

selectionSort(covid100000, (a, b) => {
    if(a.date == b.date) {
        if(a.state > b.state) return true
        else if (a.state == b.state)
            if(a.city > b.city) return true
            else return false
    }
    else if(a.date > b.date) return true
    else return false
})

console.log(covid100000)

console.timeEnd('COVID100000')
console.log('Memória usada (MB):', process.memoryUsage().heapUsed / 1024 / 1024)

console.log("xxxxxxxxxxxxxxx FIM COM 100000 SelectionSort xxxxxxxxxxxxxxx")
process.exit(0)
// ************COM TODOS REGISTROS************
*/
console.time('COVID TODOS')

selectionSort(covid19, (a, b) => {
    if(a.date == b.date) {
        if(a.state > b.state) return true
        else if (a.state == b.state)
            if(a.city > b.city) return true
            else return false
    }
    else if(a.date > b.date) return true
    else return false
})

console.log(covid19)

console.timeEnd('COVID TODOS')
console.log('Memória usada (MB):', process.memoryUsage().heapUsed / 1024 / 1024)

console.log("xxxxxxxxxxxxxxx FIM COM TODOS SelectionSort xxxxxxxxxxxxxxx")

//process.exit(0)