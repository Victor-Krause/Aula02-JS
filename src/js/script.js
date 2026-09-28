// Declarações

let nome= "Fiap";
const idade =30;
let altura =1.75;
let estudante = true;

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof altura);
console.log(typeof estudante);

// Metodos de exibição

// alert("Bem vindo ao sistema")

// let nomeUsuario= prompt("Qual é o nome do Usuário")
// `` ${} = concatenação
// console.log(`Olá, ${nomeUsuario}`)

// let desejaContinuar = confirm("Deseja realmente continuar?")
// console.log(`Resposta ${desejaContinuar}`)

// operadores aritmeticos

let soma = 10+5;
console.log(soma)
let multiplicacao = 4*2;
console.log(multiplicacao)
let subtracao= 10-5;
console.log(subtracao)
let resto= 10%3;
console.log(resto)
let divisao = 5 / 3;
console.log(divisao) 

// comparação

let a =10;
let b ="10";


// Um sinal de = significa atribuir 
// Dois sinais de = signica comparar valor
// tres sinais de = compara o valor e o tipo da variavel

console.log(a == b);
console.log(a === b);
console.log(a > b);
console.log(a >= b);
console.log(a != b);
console.log(a < 10);
// && significa o AND do python e || signfica o OR do python
console.log(b < a && a > b);
console.log(a > 20 || b >= a);

let temIdade = 18;
let habilitacao=true;

let dirigir = (temIdade >= 18) && habilitacao;
console.log("O usuario pode dirigir ?", dirigir);

// Estrutura Condicional

if(false){
    console.log("É VERDADEIRO")
}
if(true){
    console.log("É VERDADEIRO")
}else{
    console.log("É falso")
}