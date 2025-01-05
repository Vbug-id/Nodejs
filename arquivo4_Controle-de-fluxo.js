const num1 = 100
const num2 = 20
const num3 = 7
const num4 = '7' // este numero é uma string

// Exemplo de condicionais simples
// < Menos, > Maior, <= Menor ou igual, >= Maior ou Igual, === Igual,
if (num1 > 1) {
    console.log('Este número é maior que 1')
} 
if ( num2 < 10) {
    console.log('Este número é menor que 10')
} else {
    console.log('Este número é maior que 10')
}

//Exemplo de condicionais comparativas 

if (num1 < num2) {
    console.log(`${num1} é menor que o ${num2}`)
} else {
    console.log(`${num2} é menor que o ${num1}`)
}

// Exemplo de igualdade; não utilizar == para igualdade ha problemas em conversões implicitas de string e numeros 

if ( num3 === num4){
    console.log('os numeros são iguais em valor e tipo')
} else {
    console.log('os numeros são iguais porém não são do mesmo tipo') // os numeros são iguais porém não são do mesmo tipo
}