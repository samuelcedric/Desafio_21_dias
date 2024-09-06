function parseDecimal(input){
    return parseFloat(input.replace(',', '.'));
}

let num1 = parseDecimal(prompt(`Desafio dia 5: Calculadora
    
    O cálculo será feito com dois números.
    
    Insira o primeiro número:`));

let num2 = parseDecimal(prompt('Insira o segundo número:'));

let opmat = prompt(`Você quer somar, subtrair, multiplicar ou dividir? (ou use: +, -, *, /)`);

let resultado;

switch(opmat){
    case 'somar':
    case '+':
        resultado = num1 + num2;
        console.log(`${num1} + ${num2} = ${resultado}`);
        break;

    case 'subtrair':
    case '-':
        resultado = num1 - num2;
        console.log(`${num1} - ${num2} = ${resultado}`);
        break;

    case 'multiplicar':
    case '*':
        resultado = num1 * num2;
        console.log(`${num1} x ${num2} = ${resultado}`);
        break;

    case 'dividir':
    case '/':
        
        if(num2 === 0){
            console.log('Não rola dividir por zero, né? Tenta de novo.');
        }else{
            resultado = num1 / num2;
            console.log(`${num1} / ${num2} = ${resultado.toFixed(2)}`);
        }
        break;

    default:
        console.log('Ops! Digita certinho o que você quer fazer: somar, subtrair, multiplicar ou dividir.');
        break;
}