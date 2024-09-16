function parseDecimal(input) {
    return parseFloat(input.replace(',', '.'));
}

let totalNotas = 0;
let totalAlunos = 0;
let homens = 0;
let mulheresAcimaDeSete = 0;
let maiorNotaHomens = 0;

let outraNota = 'sim'; // Começa o loop aqui

while (outraNota === 'sim') {
    let nota = parseDecimal(prompt('Qual é a nota do aluno?'));
    let sexo = prompt('Qual é o sexo do aluno? (m/f)').toLowerCase();

    // Acumula as notas e conta os alunos
    totalNotas += nota;
    totalAlunos++;

    if (sexo === 'm') {
        homens++;
        if (nota > maiorNotaHomens) {
            maiorNotaHomens = nota; // Atualiza a maior nota dos homens
        }
    } else if (sexo === 'f') {
        if (nota > 7) {
            mulheresAcimaDeSete++; // Conta as mulheres com nota maior que 7
        }
    }

    // Pergunta se deseja cadastrar outra nota
    outraNota = prompt('Deseja cadastrar outra nota? (sim/não)').toLowerCase();
}

// Calcula a média geral
let mediaGeral = totalNotas / totalAlunos;

// Exibe os resultados
console.log(`Média geral dos alunos: ${mediaGeral.toFixed(2)}`);
console.log(`Quantidade de homens: ${homens}`);
console.log(`Mulheres com nota acima de 7: ${mulheresAcimaDeSete}`);
console.log(`Maior nota entre os homens: ${maiorNotaHomens}`);
