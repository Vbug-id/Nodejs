//true
//truthy: [], {}, número diferente de zero 0, string não vazia.

//false
//falsy: null, undefined, 0, "" string vazia, NaN

// !! retorno booleano

//console.log(!! [], !! {}, !! 0.1, !! 'iee')

//console.log(!! null, !! undefined, !! 0, !! '', !! NaN)

// Condição if com operador lógico &&
 
const idade = 19
const temCNH = true

const podeDirigir = idade > 18 && temCNH

if (podeDirigir) {
    console.log('Pessoa Habilitada para consuzir veículo')
} else {
    console.log('Pessoa não está Habilitada para consuzir veículo')
}

// Ternario, simplificando o codigo, "":" significa caso e '?' significa caso seja verdadeiro.
const numPassageiro = podeDirigir ? 4 : 0 

//let numPassageiro  
//if (podeDirigir) {
//    numPassageiro = 4
//} else {
//    numPassageiro = 0
//}

console.log({ numPassageiro })