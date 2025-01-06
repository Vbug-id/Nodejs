// identificar numeros impares dos numeros pares em lista

const listNumber = [25, 88, 71, 192, 33, 22, 10, 11, 62]

const listNumberPar     = []
const listNumberImpar = []

let indiceDeControle = 0

// O metodo 'push'  incrementa o valor referente a condição na lista do qual foi atribuido 

while (indiceDeControle < listNumber.length) {

    if (listNumber[indiceDeControle] % 2 === 0){
        listNumberPar.push(listNumber[indiceDeControle])
    } else {
        listNumberImpar.push(listNumber[indiceDeControle])
    }
    
    indiceDeControle =++ indiceDeControle    
}

console.log('Números Pares identificados na lista', listNumberPar)
console.log('Números impares identificados na lista', listNumberImpar)