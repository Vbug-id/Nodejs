const listUsuarios = ['joão', 'Maria', 'josé', 'Pedro'] 

// Em uma listaa primeira posição ou posição de inicio é sempre 0
// Exemplo:
// console.log('Olá', listUsuarios[0])
// console.log('Olá', listUsuarios[1])
// console.log('Olá', listUsuarios[2])
// console.log('Olá', listUsuarios[3])

//Automatizando a atividade à cima com um looping de repetição, 'WHILE'

// ↓ Esta variavel serve para controlar o fluxo do 'while', afim de evitar que o mesmo não fique em looping infinito.

// const indiceDoUsuario = 4     // ↓ a função 'length' faz com que o while percorra item a item da lista
// let indiceAtual = listUsuarios.length 
// console.log({ indiceAtual });

let indiceDoUsuario = 0

// ↓ no codigo abaixo enquanto o indice do usuario for menor que comprimento da lista repita o looping com while
while (indiceDoUsuario < listUsuarios.length) {
    //indiceAtual = indiceAtual + 1       // '=' =++
    // é necessario inserir estalinha de cod, para interagir e cria de fato uma condição que limita o looping do while
    
    console.log('Olá', listUsuarios[indiceDoUsuario])
    
    indiceDoUsuario =++ indiceDoUsuario // =++ ignifica incremento 
    //     //console.log(`${indiceAtual}`)
    
}

//obs: Lembrando que o simbolo de = em js é um atribuidor de valor, não de igualdade 
// é possivel simplificar com =+, ex  var =++ var
