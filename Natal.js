
function verificarDataNatal(data) {
    var dataNatal = new Date('25/12/2023');

    var dataEntrada = new Date(data);

    if(dataNatal.toDateString() === dataEntrada.toDateString()) {
        console.log('Feliz Natal !');
    } else {
        console.log('Não é Natal. :(');
    }
}

var minhaData = '25/12/2023';
verificarDataNatal(minhaData);