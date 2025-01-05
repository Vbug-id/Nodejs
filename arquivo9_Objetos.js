// Orientado a objeto
// Ao criar usar {}
// os ":" referece a propriedade
const animal = {
    especie: 'Canis Lupus',
    habitatComun: 'Florestas Norte Americana',
    expectVida: 20,
    Terrestre: true
}
console.log(animal);
console.log(animal.Terrestre);
console.log(animal.especie);

// para definir uma nova propriedade é só inserir a variavel, objeto, com '.' ponto e o nome e valor da nova propriedade
//uma boa pratica para definir numeros e sparar as milhas com anderline '_' 1_000_000_000

animal.população = 1000

console.log(animal.população);

