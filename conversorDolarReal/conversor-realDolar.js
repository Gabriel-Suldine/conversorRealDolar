let read = require('readline-sync') 

let dolar = 5.65
let entrada_real = read.questionInt("Digite um valor em Real: R$")
console.log("Conversor de valores, Real p/ Dolar")
console.log("R$",entrada_real," em Dolar")
let resultado = entrada_real / dolar 
console.log(entrada_real," Reais em Dolar é: U$ ", resultado.toFixed(2))
