const listaDeContato = ['João', 'Maria', 'José', 'Josué', 'Matheus', 'aul', 'Matias', 'Paulo']

let machtUser = false
let indiceUser = 0

// o simbolo '!' significa se for falso, uma condicional
while (!machtUser) {
    const indiceAtual = listaDeContato[indiceUser]
    
    if (indiceAtual.startsWith('R')) {
        // O método startWith está vinculado a uma string que significa 'começa com' no caso de uma string começa com que letra
        machtUser = true
        console.log(`Usuario encontrado: ${indiceAtual}`);
    }
    
    indiceUser =++ indiceUser
    
    // o metodo 'length' percorre item a item de uma lista 'array'
    if (indiceUser === listaDeContato.length) {
        machtUser = true
        console.log('Úsuario não encontrado !');    
    }
    
}

// Caso Dois
// Outra forma de utilizar o while 

const listaDeContato2 = ['João', 'Maria', 'José', 'Josué', 'Matheus', 'Raul', 'Matias', 'Paulo']

let indiceUser2 = 0

while (true) {

    const indiceAtual = listaDeContato2[indiceUser2]

    if (indiceAtual.startsWith('R')) {
        console.log(`Usuario encontrado: ${indiceAtual}`)
        break
    }

    indiceUser2 =++ indiceUser2

    if (indiceUser2 === listaDeContato2.length) {
        console.log('Úsuario não encontrado !');
        break    
    }
    
}

// Caso 3
// Do-While

const listaDeContato3 = ['João', 'Maria', 'José', 'Josué', 'Matheus', 'Raul', 'Matias', 'Paulo']

let machtUser3 = false
let indiceUser3 = 0

// o simbolo '!' significa se for falso, uma condicional
while (!machtUser3) {
    const indiceAtual = listaDeContato[indiceUser3]
    
    if (indiceAtual.startsWith('R')) {
        machtUser3 = true
        console.log(`Usuario encontrado: ${indiceAtual}`);
    }
    
    indiceUser3 =++ indiceUser3
    
    if (indiceUser3 === listaDeContato3.length) {
        machtUser3 = true
        console.log('Úsuario não encontrado !');    
    }
    
}