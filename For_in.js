//FOR-IN é utilizdo para objeto


const user = {
    name: 'joSÉ mARIa SOUSA santos',
    email: 'JOSE.M1@gmail.com',
    age: 27,
    address: 'rua X'
}

for (const key in user) {
    if (key === 'name'){
    
        const names = user[key].split(' ') // Metodo split separa o valor estipulado em parenteses
        user[key] = ''
    
        for (const name of names ) {
            const normalizedName = name.toLowerCase()
            const [primeiraLetra, ...restoDoNome] = normalizedName
       
            user[key] = user[key] + ' ' + primeiraLetra.toUpperCase() + restoDoNome.join('')
            user[key] = user[key].trim() // metodo trin ajusta os epaços desnecessarios
        }
    }

    if (key === 'email'){
        user[key] = user[key].toLowerCase()   // metodo 'toLowerCase' tansforma toda string em minuscula
    }
}
console.log(user)