
const listaDeContato = ['João', 'Maria', 'José', 'Josué', 'Matheus', 'Matias', 'Paulo']
//const listaDeContato = ['João', 'Maria', 'José', 'Josué', 'Matheus', 'Raul', 'Matias', 'Paulo']

let machtUser = false
let indiceUser = 0

do {
    //console.log('Rodei ?');
    
    const indiceAtual = listaDeContato[indiceUser]
    
    if (indiceAtual.startsWith('R')) {
        machtUser = true
        console.log(`Usuario encontrado: ${indiceAtual}`);
    }
    
    indiceUser =++ indiceUser
    
    if (indiceUser === listaDeContato.length) {
        machtUser = true
        console.log('Úsuario não encontrado !');    
    }
    
} while (!machtUser)


// Segunda Solução

//const listUser = ['Raul']
const listUser = []

let machtUser1 = false
let indiceUser1 = 0

do {
    //console.log('Rodei ?');
    
    const indiceAtual1 = listUser[indiceUser1]
    
    //shortswifting, se a a primeira condição logica seguida por um 'AND' não for cumprida o 'js' finaliza a execução do programa
    if (indiceAtual1 && indiceAtual1.startsWith('R')) {     
        machtUser1 = true
        console.log(`Usuario encontrado: ${indiceAtual1}`);
    }
    
   // indiceUser1 =++ indiceUser1

    if (indiceUser1 >= listUser.length) {
        machtUser1 = true
        console.log('Úsuario não encontrado !');    
    }
    
} while (!machtUser1)