function parseDecimal(input){
    return parseFloat(input.replace(',', '.'));
}

let nome = prompt(`Desafio 2: Caixa Eletrônico.
    
    Qual é seu nome?`);

let cpf = Number(prompt(`Qual é seu CPF?`));

let numero = (Math.random() * (9999 - 1000) + 1000).toFixed(2);

let saldo = prompt(`Seu saldo é R$ ${numero};
    
    Quer fazer um saque ou um depósito?`);

let saldoAtual = '';

if (saldo === 'saque'){
    let saque = parseDecimal(prompt(`Qual é o valor do saque?`));

    saldoAtual = numero - saque;

    do {
        
        let novaOp = prompt((`Feito! Seu saldo atual é R$ ${saldoAtual};
            
            Deseja fazer uma nova operação? (Sim/Não)`));

    } while (novaOp === 'sim'){

        let saldo = prompt(`Seu saldo é R$ ${saldoAtual}
    
            Quer fazer um saque ou um depósito?`);
    };

    console.log(`Feito! Seu saldo atual é R$ ${saldoAtual}`);
}