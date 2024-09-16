function parseDecimal(input) {
    return parseFloat(input.replace(',','.'));
}

let totalNotas = 0;
let totalAlunos = 0;
let outraNota = 'sim';

while (outraNota === 'sim') {
    
    let nota = parseDecimal(prompt(`Insira a nota do aluno (0 a 10):`));

    if (nota < 0 || nota > 10){
        console.log(`a nota do aluno tem que estar entre 0 e 10. Tenta de novo aí!`);
        continue;
    }else {
        totalNotas += nota;
        totalAlunos++;
    }

    outraNota = prompt(`Deseja cadastrar outra nota? (sim/não)`);

    if (outraNota !== 'sim' && outraNota !== 'não'){
        console.log(`Parece que você colocou algo diferente de sim e de não, tenta de novo aí!`);
        outraNota = 'sim';
    }
}

let média = totalAlunos > 0 ? totalNotas / totalAlunos : 0;

console.log(`A nota média dos alunos é: ${média.toFixed(2)}`);