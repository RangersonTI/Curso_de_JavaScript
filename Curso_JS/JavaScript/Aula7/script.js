// Regras para constantes na programação
/*
 * Não podemos criar constantes com palavras reservadas(print, alert, console, etc)
 * Nunca começar o nome da constante com numero
 * Não deve conter espaço ou traços numa constante
 * A constante deve ter um nome significativo ( let n [?] != let nomeCliente [☺])
 * Usa-se camelCase
 * Constante Case-sensitive (difere letras maiuscula das minusculas)
 * Não pode-se redeclarar uma variavel
 * NÃO USAR var E SIM const
 */

const meuNome = 4
const num = 5;
const result = (meuNome*num)*2
let quadruplicando = result*4
while(quadruplicando< 500){
    quadruplicando=quadruplicando+0.51
    console.log(quadruplicando)
}
console.log(typeof(quadruplicando))
