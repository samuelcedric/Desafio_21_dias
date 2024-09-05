let nome = prompt(`Desafio 4 - Motorista.
    
Qual é seu nome?`)

let idade = Number(prompt('Qual é sua idade?'))

if(idade < 18){
    console.log(`${nome}, você não pode dirigir, pois é menor de idade.`)
}else{

    let carta = prompt('Você possui carteira de motorista?')

    if(carta === 'não'){
        console.log(`${nome}, você não pode dirigir, pois não possui carteira de motorista.`)
    }else{

        let carro = prompt('Você possui carro?')

        if(carro === 'não'){
            console.log(`${nome}, você pode dirigir, mas não possui carro.`)
        }else{
            console.log(`${nome}, você será o motorista!`)
        }
    }
}