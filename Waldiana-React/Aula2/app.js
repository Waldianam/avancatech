console.log("Hello, world");
let nome= "Waldiana";
console.log(nome);

let idade= 47;
console.log(idade);

///=======Concatenação de Strings=============
console.log("Meu nome é "+ nome + " e minha idade é" + idade);


//=======Template String=========
console.log(`Meu nome é ${nome} e minha idade é ${idade}`);

//=======Entrada de Usuario e Alert===========
let livro= prompt("Digite o livro que você quer");

//Criar em Template String
alert(`O livro escolhido foi ${livro}`);

//======Operadores================
let num1 = 15;
let num2 = 16;

console.log(num1 + num2);
console.log(num1 * num2);
console.log(num1/num2);
console.log(num1-num2);

//=====condicionais========

if (idade >=18){
    console.log("Você é maior de idade");
}else{
    console.log("Você é menor de idade");
}

if(idade > 60){
    console.log("idosa");

}else if (idade>18){
    console.log("Adulto");

}else if(idade >13){
    console.log("Adolescente");

}else  {
    console.log("Criança");
}

//====Exercicio Criando uma nota=======

let nota = 8;
if(nota==10){
    console.log("Excelente");


}else if(nota>= 7){
    console.log("Ótimo");

}else if(nota>=4){
    console.log("Bom");

}else{
    console.log("Péssima");
}