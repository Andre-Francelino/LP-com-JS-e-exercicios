// Diferença entre Json e Objeto em Javascript
// Apesar do surgimento do Json ter sido de um Obejto Javascript, esses tipos são diferentes

// variável rockStar que recebe alguns atributos
const rockStar = {
    nome: "Steve",
    sobrenome: "Harris",
    idade: 67,
    paisOrigem: "Inglaterra",
    atividade: "Baixista",
    banda: "Iron Maiden",
    membroFundador: true
}

// mostrando o tipo da variável rockStar em seu estado original, como um Objeto Javascript
console.log("variável do tipo Objeto Javascript: " + typeof rockStar, rockStar);

// Convertendo de Objeto p/ Json (string) -  O metodo que faz essa conversão é o .stringfy
const convertToJson = JSON.stringify(rockStar);
console.log("variável convertida para o tipo JSON(string): " + typeof convertToJson, convertToJson);

// Convertendo de JSON p/ Objeto - O metodo que faz essa conversão contrária é o .parse
const convertToObject = JSON.parse(convertToJson);
console.log("variável retornando a ser do tipo Objeto Javascript: " + typeof convertToObject, convertToObject);

// para rodar no terminal usar o comando: node JSONxObject.js
