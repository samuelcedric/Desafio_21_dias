let loop = prompt(`Você está no loop, deseja continuar? (sim/não)`);

while (loop === 'sim') {
    loop = prompt(`Você está no loop, deseja continuar? (sim/não)`);

    if (loop === 'não'){
        console.log('Você saiu do loop.');
        break;
    }
}