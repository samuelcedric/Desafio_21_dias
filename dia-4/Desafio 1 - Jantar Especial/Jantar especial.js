let fome = prompt(`Desafio dia 4: Jantar especial?
    
Você está com fome?`)

if(fome === 'não'){
    console.log('Hoje a janta será em casa.')
}else{
    
    let dinheiro = prompt(`Você tem dinheiro?`)

    if(dinheiro === 'não'){
        console.log('Hoje a janta será em casa.')
    }else{
        
        let rest = prompt(`O restaurante está aberto?`)
        
        if(rest === 'não'){
        console.log('Peça um delivery!')
        }else{
        console.log('Hoje o jantar será no seu restaurante preferido! Bom apetite!')
        }
    }
}