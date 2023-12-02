/* Exercício 1:

let fome = prompt(`Desafio dia #4 - Exercício 1: Jantar Especial?

Você está com fome?`)

let dinheiro = prompt(`Você tem dinheiro?`)

if (fome == 'não' || dinheiro == 'não'){
    console.log('Hoje a janta será em casa')

}else if (fome == 'sim' && dinheiro == 'sim'){
    let restaurante = prompt(`O restaurante está aberto?`)
    if (restaurante == 'não'){
    console.log('Peça um delivery!')
    }else{
        console.log('Hoje o jantar será no seu restaurante preferido!')
    }
}*/

/* Exercício 2:

let nome = prompt(`Desafio dia #4 - Exercicio 2: Motorista

Qual é seu nome?`)

let idade = parseInt(prompt('Qual é sua idade?'))

let cnh = prompt('Você possui carta de motorista?')

if (idade < 18 || cnh == 'não'){
    console.log(`${nome} você não pode dirigir.`)
}else if (idade > 18 && cnh == 'sim'){
    let carro = prompt('Você tem carro?')
    if (carro == 'não'){
    console.log(`${nome} você pode dirigir, mas não tem um carro.`)
    }else{
        console.log(`${nome} você será o motorista!`)
    }
}*/