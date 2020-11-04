// MergeSort para ordenação dos registro da lista de objetos contidas no arquivo covid-19.js;
// Ordenados por date, state e city;
// amostras de 1000, 25000, 100000 e todos os registro.
// tempo gasto;
// quatidade de memória usada.

function mergeSort(vetor, fnComp) {
    function mesclarVetores(vetEsq, vetDir) {

        let vetRes = [], posEsq = 0, posDir = 0, sobra

        while(posEsq < vetEsq.length && posDir < vetDir.length) {
            if(fnComp(vetDir[posDir], vetEsq[posEsq])) {
                vetRes.push(vetEsq[posEsq])
                posEsq++
            }
            else {
                vetRes.push(vetDir[posDir])
                posDir++
            }
        }
        

        if(posEsq < posDir) sobra = vetEsq.slice(posEsq)

        else sobra = vetDir.slice(posDir)

        return vetRes.concat(sobra)
    }
    
    if(vetor.length > 1) {
        let meio = Math.floor(vetor.length / 2)
        let vetEsq = vetor.slice(0, meio)
        let vetDir = vetor.slice(meio)

        vetEsq = mergeSort(vetEsq, fnComp)
        vetDir = mergeSort(vetDir, fnComp)

        return mesclarVetores(vetEsq, vetDir)        
    }
    return vetor
}

const covid19 = require('./dados/covid-19')


// ************COM 1000 REGISTROS DE AMOSTRA************
const covid1000 = covid19.slice(0, 999)

console.time('COVID1000')

mergeSort(covid1000, (a, b) => {
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

console.log("xxxxxxxxxxxxxxx FIM COM 1000 MergeSort xxxxxxxxxxxxxxx")

// ************COM 25000 REGISTROS DE AMOSTRA************
const covid25000 = covid19.slice(0, 24999)

console.time('COVID25000')

mergeSort(covid25000, (a, b) => {
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

console.log("xxxxxxxxxxxxxxx FIM COM 25000 MergeSort xxxxxxxxxxxxxxx")

// ************COM 100000 REGISTROS DE AMOSTRA************

const covid100000 = covid19.slice(0, 99999)

console.time('COVID100000')

mergeSort(covid100000, (a, b) => {
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

console.log("xxxxxxxxxxxxxxx FIM COM 100000 MergeSort xxxxxxxxxxxxxxx")

// ************COM TODOS REGISTROS************

console.time('COVID TODOS')

mergeSort(covid19, (a, b) => {
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

console.log("xxxxxxxxxxxxxxx FIM COM TODOS MergeSort xxxxxxxxxxxxxxx")

//process.exit(0)