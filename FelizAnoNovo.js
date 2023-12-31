function verificarDataAnoNovo(data) {
    var dataAnoNovo = new Date('01/01/2024');

    var dataEntrada = new Date(data);

    if (dataAnoNovo.toDateString() === dataEntrada.toDateString()) {
        console.log('Feliz Ano Novo!');
        console.log('Um 2024 cheio benções, realizações e de muito trabalho para todos nós!')
    } else {
        console.log('Ainda não é ano novo!');
    }
}

var minhaData = '01/01/2024'
verificarDataAnoNovo(minhaData);
