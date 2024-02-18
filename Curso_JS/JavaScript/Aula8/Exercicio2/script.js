/*
    Luís Otávio Miranda tem 30 anos, pesa 84 kg, tem 1.8 de altura e seu IMC é 25.925...
*/
const nome = 'Rangerson';
const sobrenome = 'Clemente';
const peso = 75;
const idade = 20;
const altura = 1.75;
let IMC;
IMC = peso/(altura*altura);
let anoNascimento = 2003;

console.log(nome+' '+sobrenome+' tem '+(2023-anoNascimento)+' anos, pesa '+peso+' kg, tem '+altura+' de altura e seu IMC é '+IMC);
console.log(nome, sobrenome, 'nasceu em', anoNascimento);