const num1 = 10
const num2 = 20

//const soma = num1 + num2

console.log(num1 + num2)

let num3        // o retorno será NaN é impossivel somar ou obter retorno, se uma das variaveis não ter numeros
                // é possivel utilizar o null, po retorno seria o valor da segunda variavel, o null transformaria oa variavel em zero  'let num3 = null'
const num4 = 10

const soma1 = num3 + num4

console.log(  soma1  )

//conversão implícita

// funçoes aritmetricas

const soma = num1 + num2
const subtracao = num1 - num2
const multiplicacao = num1 * num2
const divisao = num1 / num2
const elevado = num1 ** num2
const elevadoFunc = Math.pow(2, 3) //função Math, pow é elevação
const restoDiv = num1 % num2
const numneg = -3
const numAbsoluto = Math.abs(numneg)   //numero absoluto utilizando a biblioteca Math

console.log({ soma })
console.log({subtracao})
console.log({multiplicacao})
console.log({divisao})
console.log({elevado})
console.log({elevadoFunc})
console.log({restoDiv})
console.log({numAbsoluto})