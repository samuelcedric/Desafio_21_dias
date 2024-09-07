let num = Number(prompt(`Insira um número e te mostrarei a tabuada dele e dos dois próximos até o 10.`));

let tabuada = 0;

for(i = 0; i <= 2; i++){
    let atual = num + i;
    console.log(`Tabuada do ${atual}`);
    
    for(contador = 0; contador <= 10; contador++){
        tabuada = atual * contador;
        console.log(`${atual} x ${contador} = ${tabuada}`);
    }
    console.log('');
}