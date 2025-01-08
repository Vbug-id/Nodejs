
const path = require('node:path')
const fs = require('node:fs')                      //fs = file system

// filepath tratasse do caminho do arquivo que queremos acessar 
const filepath = path.join(process.cwd(), 'nodejs', 'texto_test.txt' ) // join junta os argumentos. • cwd é o comando cli atual 
const fileOutpath = path.join(process.cwd(), 'nodejs', 'texto_test-com-linhas.txt' )

fs.readFile(filepath, {}, (erro, dados) => {
    if(erro){
        console.error(`Erro na leitura do arquivo ${filepath}`)
        return
    }
    const texto = dados.toString()
    const linhas = texto.split('\n')

    const linhasAjustadas = linhas.map((Linha, index) => 
        `${index + 1} - ${Linha}`
    )

    fs.writeFile(fileOutpath, linhasAjustadas.join('\n'), {}, (erro) => {
        if (erro){
            console.error(`Erro na escrita do arquivo ${fileOutpath}`);        
        }
    })

    //linhas.forEach((Linha, index) => 
    //    console.log(`${index + 1} - ${Linha}`)
    //)

        //console.log(dados.toString());
})


