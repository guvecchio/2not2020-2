// Declaração de objeto vazio
let pessoal = {}            // Método "moderno"
let pessoa2 = new Object()  // Método "tradicional"

// Declarando e inicializando um objeto já com propriedades
// - propriedade -> atributo + valor
// json só aceita aspas duplas, e tem que colocar tudo entre aspas
// aceita separação de palavras, mas com uso de aspas
let pessoa3 = {
    nome: 'João das Coves',
    naturalidade: 'Franca/SP',
    'data de nascimento': '1997-11-03',
    estudante_fatec: true
}

// Acessando uma propriedade de um objeto
// Atributo é uma única palavra --> sintaxe do ponto
console.log(pessoa3.nome)
console.log(pessoa3.estudante_fatec)

console.log('............................................')

// Acessando uma propriedade composta por várias palavras
// Sintaxe dos colchetes
console.log(pessoa3['data de nascimento'])

console.log('............................................')

// Sintaxe dos colchetes SEMPRE funciona, mesmo com propriedades cujo nome é uma única palavra
console.log(pessoa3['naturalidade'])

console.log('............................................')

let atrib = 'nome'
console.log(pessoa3[atrib])

console.log('............................................')

// Criando novas propriedades em um objeto
// Basta atribuir o valor a um nome de atriburo, segundo a sintaxe apropriada a cada caso
pessoa3.nacionalidade = 'portuguesa'                // Única palavra
pessoa3['registro de estrangeiro'] = 123456789      // Várias palavras

console.log(pessoa3)

console.log('............................................')

// Eliminando uma propriedade
delete pessoa3.estudante_fatec

console.log(pessoa3)

console.log('............................................')

// Como percorrer todas as propriedades de uma objeto: for..in
for(let prop in pessoa3){
    console.log(prop)
}

console.log('............................................')

// Listando atributo e valor de uma objeto usando for..in
for( let atrib in pessoa3){
    //console.log('Atributo: ' + atrib + '; Valor: ' + pessoa3[atrib])
    // Abaixo entre acentos GRAVES para não precisar concatenar
    console.log(`Atributo: ${atrib}; Valor: ${pessoa3[atrib]}`)
}

console.log('............................................')


