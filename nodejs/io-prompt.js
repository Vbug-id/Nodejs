
const rl = require('readline') 

const prompt = rl.createInterface({
    input: process.stdin,
    output: process.stdout
})

const promptPromise = {
    question: (pergunta) => new Promise((resolve, reject) => {
        try{
            prompt.question((pergunta), (resposta) => resolve(resposta))
        } catch (error){
            reject(error)
        }
    }),
    close: prompt.close
}

async function askUser() {
    const numero = await promptPromise.question('Qual seu número favorito ?: ')
    console.log(`O dobro do seu número favorito é: ${parseInt(numero) * 2}`);
}
    prompt.close



