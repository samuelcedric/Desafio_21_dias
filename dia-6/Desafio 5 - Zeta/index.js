let numInicial = Number(prompt(`Tabuada Personalizada. 
    Insira o primeiro número:`));

let numFinal = Number(prompt(`Insira o segundo número:`));

let tabuada = '';

if (numFinal < numInicial){
    console.log('O número final tem que ser maior que o inicial. Tenta de novo aí!')
}else{
    for (atual = numInicial; atual <= numFinal; atual++){
    
        console.log(`Tabuada do ${atual}`);
    
        for (j = 1; j <= 10; j++){
    
            tabuada = atual * j;
            console.log(`${atual} x ${j} = ${tabuada}`);
    
        }
        console.log('');
    }
}