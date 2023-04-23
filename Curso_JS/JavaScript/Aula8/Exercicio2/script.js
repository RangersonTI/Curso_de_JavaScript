/*
    Luís Otávio Miranda tem 30 anos, pesa 84 kg, tem 1.8 de altura e seu IMC é 25.925...
*/

const nome = 'Rangerson Clemente'
const idade = 19;
const pesoKilo = 75;
const altura = 1.74
let IMC = pesoKilo / (altura**2)
let anoNascimento = 2023 - idade

console.log(nome,'tem',idade,'anos, pesa',pesoKilo,'Kg, tem',altura,'metros de altura')
console.log('e seu IMC é de',IMC)
console.log(nome,'nasceu em',anoNascimento)