let nome = prompt(`Desafio dia #3 - Conhecendo o Usuário!

Insira seu nome:`)
let idade = Number(prompt('Insira sua idade:'))
let altura = parseFloat(prompt('Insira sua altura: (Exemplo: 1.70)'))
let peso = parseFloat(prompt('Insira seu peso: (Exemplo: 64.2)'))
let imc = peso / (altura*altura)

console.log(`Olá ${nome}, você tem ${idade} anos, nasceu em ${2023 - idade}, tem ${altura.toFixed(2)} de altura, pesa ${peso.toFixed(2)}kg, seu IMC é ${imc.toFixed(2)}kg/m²`)