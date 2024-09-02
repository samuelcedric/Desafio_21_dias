let nome = prompt(`Quero te conhecer!
    
Insira seu nome!`)

let idade = Number(prompt(`Insira sua idade!`))
let altura = parseFloat(prompt('Insira sua altura! (Ex: 1.87)'))
let peso = parseFloat(prompt('Insira seu peso! (Ex: 65.2)'))

let anoDeNasc = 2024 - idade
let imc = peso / (altura*altura)

console.log(`Olá ${nome}! Você tem ${idade} anos, nasceu em ${anoDeNasc}, tem ${altura.toFixed(2)}, pesa ${peso}kg e seu IMC é ${imc.toFixed(2)}kg/m².`)