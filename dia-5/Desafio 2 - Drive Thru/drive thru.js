function parseDecimal(input){
    return parseFloat(input.replace(',','.'));
}

let opcao = prompt(`Desafio dia 5: Drive Thru
    
    Você quer abastecer ou calibrar?`);

if(opcao === 'abastecer'){
    
    let combustivel = prompt('Deseja abastecer com gasolina ou álcool?');
    let litros;

    if(combustivel === 'gasolina'){

        let valorGasolina = parseDecimal(prompt('O litro da gasolina está R$4,99. Qual o valor do abastecimento?'));
        litros = valorGasolina / 4.99

        console.log(`NOTA FISCAL:
            
            Litros: ${litros.toFixed(2)};
            Valor total: ${valorGasolina.toFixed(2)}`);
    
    }else if(combustivel === 'álcool'){
        
        let valorÁlcool = parseDecimal(prompt('O litro da gasolina está R$2,99. Qual o valor do abastecimento?'));
        litros = valorÁlcool / 2.99;

        console.log(`NOTA FISCAL:
            
            Litros: ${litros.toFixed(2)};
            Valor total: ${valorÁlcool.toFixed(2)}`);
    }else{
        console.log('Combustível não reconhecido, tente novamente.');
    }
    
}else if(opcao === 'calibrar'){
    
    console.log('Pneus calibrados!');

}else{
    
    console.log('Opção não reconhecida, tente novamente!');
}