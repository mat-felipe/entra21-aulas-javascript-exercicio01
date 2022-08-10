
//VARIÁVEIS
// Crie uma variável para cada tipo existente com let ou var (apenas console)
// Se cada exercício anterior foi feito de forma unica no arquivo JS, separe-os em funções especificas
function viriaveis() {
    let string = "Mateus Felipe";
    var number = 29;
    let boolean = true;
    var array = [
        "Mateus",
        "Felipe",
        "Goettems",
    ]
    let json = {
        nome: "Mateus Felipe",
        idade: 29,
        profissao: "Engenheiro",
    }

    let funcao = function exFunction() {
        alert("6. function!")
    }

    function argFunction(a, b) {
        let c = a + b
    }
    argFunction()
}

// Exiba em log o valor de cada variável e o tipo da variável com typeof(variável)
function typeofVar() {
    console.group('Exiba em log o valor de cada variável e o tipo da variável com typeof(variável)')
    let string = "Mateus Felipe";
    var number = 29;
    let boolean = true;
    var array = [
        "Mateus",
        "Felipe",
        "Goettems",
    ]
    let json = {
        nome: "Mateus Felipe",
        idade: 29,
        profissao: "Engenheiro",
    }

    let funcao = function exFunction() {
        alert("6. function!")
    }
    console.log(typeof (string));
    console.log(typeof (number));
    console.log(typeof (boolean));
    console.log(typeof (array));
    console.log(typeof (json));
    console.log(typeof (funcao));
    console.groupEnd()
}

//Para cada variável faça um IF que tome uma decisão e também no ELSE
function ifelseVar() {
    console.group('Para cada variável faça um IF que tome uma decisão e também no ELSE')
    let string = "Mateus Felipe";
    var number = 29;
    let boolean = true;
    var array = [
        "Mateus",
        "Felipe",
        "Goettems",
    ]
    let json = {
        nome: "Mateus Felipe",
        idade: 29,
        profissao: "Engenheiro",
    }

    let funcao = function exFunction() {
        alert("6. function!")
    }
    if (string === "Mateus Felipe") {
        console.log("Quase");
    } else {
        console.log("Entrou no else");
    }

    if (number == 29) {
        console.log("Acerto mizeravi!");
    } else {
        console.log("Errou!");
    }

    if (boolean === true) {
        console.log("Verdadeiro");
    } else {
        console.log("Falso");
    }

    if (array.length >= 3) {
        console.log("Mais");
    } else {
        console.log("Menos");
    }

    if (json.length >= 3) {
        console.log("Mais");
    } else {
        console.log("Menos");
    }

    if (typeof (functions) === "funcao") {
        console.log("IF");
    } else {
        console.log("ELSE");
    }
    console.groupEnd()
}


// Para uma variável string e number, faça um switch que tome uma decisão
function switchEx() {

    let string = "Mateus Felipe"
    var number = 29

    switch (number) {
        case 30:
            console.log("Quase");
            break;
        case 29:
            console.log("Acertou");
            break;
        default:
            console.log("404");
            break;
    }
    switch (string) {
        case "string":
            console.log("Got the value right");
            break;
        default:
            console.log("Error!");
            break;
    }
}

// Para uma variável do tipo array, faça as repetições possíveis (for com índice / foreach)
function repArray() {

    let listaNomes = ["Fulano", "Ciclano", "Beltrano"]

    console.warn("FOR");
    for (let count = 0; count < listaNomes.length; count++) {
        console.log("The name is", listaNomes[count], "Position", count);
    }

    console.warn("FOREACH");
    listaNomes.forEach(count1 => {
        console.log("The name is", count1);
    });
}

viriaveis(); 
typeofVar();
ifelseVar();
switchEx();
repArray();

//______________________________________________________________________________________________

// MANIPULAR HTML COM JAVASCRIPT
// 1 - Com javascript puro (É importante saber o básico)
// Localize um elemento no html por id
let titulo = document.getElementById("titulo")

// Localize um ou mais elementos por class
let subtitulo = document.getElementsByClassName('subtitulo')

// Localize um ou mais elementos por nome do seletor <tag>
let paragrafo = document.getElementsByTagName('p')

// Crie um novo paragrafo no body
let criarPar = document.createElement("p");
document.body.append(criarPar)
criarPar.textContent = "Paragrafo criado no JavaScript.";



//______________________________________________________________________________________________

// 2 - Com jQuery (É importante otimizar o trabalho)
// Localize um elemento por ID
let localElemJQuery = $('#titulo')

// Exiba em log o conteúdo desse elemento
console.log(localElemJQuery.text());

// Exiba em log o conteúdo HTML desse elemento
console.log(localElemJQuery);

// Altere o conteúdo desse elemento por outro
$('#titulo').text("Titulo alterado com jQuery")

// Insira um novo elemento internamente a esse com append
$('#titulo').append(
     $("<img>", { src: "./img/01.png" })
 )

// Localize uma lista de elementos por class
let elemClass = [...$(".alterar")]

// Converta esses elementos em uma lista e exiba de forma individual o seu conteúdo
console.log(elemClass);
 for (count = 0; count < elemClass.length; count++) {
     console.log("Item -", count, "-", elemClass[count].textContent);
 }
 

// Altere o conteúdo desses elementos por outro
 $(".alterar").text("O Oi foi alterado")

// Localize uma lista de elementos por nome de seletor
 let titulos = [...$("h3")]

// Converta esses elementos em uma lista e exiba de forma individual o seu conteúdo
 console.log(titulos);
 for (count = 0; count < titulos.length; count++) {
     console.log("Item -", count, "-", titulos[count].textContent);
 }

// Altere o conteúdo desses elementos por outro
 $("h2").text("Ajustei o titulo")








