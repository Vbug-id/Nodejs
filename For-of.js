// FOR-OF é utilizado para array 'lista'
const listNumber = [-3, -2, -1, 0, 1, 2, 3]
const usuarios = ['Maria','José']

// imperativo
//for (let index = 0; index < listNumber.length; index ++) {
//   console.log(listNumber[index]);
//}

//comparativo while
//console.log('Print via while \n');
//let indiceNumber = 0
//while (indiceNumber < listNumber.length){
//    console.log(listNumber[indiceNumber])
//    indiceNumber =++ indiceNumber
//}



//declarativo
for (const numero of listNumber){
    console.log(numero);
}

for (const usuario of usuarios){
    console.log(usuario);
}

