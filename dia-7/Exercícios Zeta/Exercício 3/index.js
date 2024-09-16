let numeros = [];  // Array vazio para armazenar os números
let num = Number(prompt(`Insira um número quantas vezes quiser, quando quiser parar é só digitar 0.`));
let soma = 0


while (num != 0) {
    numeros.push(num);  // Adiciona o número ao array
    soma += num;
    num = Number(prompt(`Insira outro número ou digite 0 para parar.`)); // Pede outro número
}

console.log(`Os números inseridos foram: ${numeros}`);
console.log(`A soma desses números é: ${soma}`);