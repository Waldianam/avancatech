

//Criando um objeto que guarda varias informações juntas

let aluno = {
    nome: "Waldiana",
    idade: 47,
    curso: "Avança Tech"
};

//Mostrando no console
console.log(typeof aluno);

console.log(aluno.nome);
console.log(aluno.idade);
console.log(aluno.curso);

//alteral o valor da variavel
aluno.nome = "Daniel";

console.log( aluno.nome);

aluno.curso = ".net";
aluno.idade = 35;

console.log(aluno.curso);
console.log(aluno.idade);

//adicionar uma Propriedade nova

aluno.tel = 40028922;
console.log(aluno); //mostrando o object

//adicione mais uma propriedade chamada de profissão

aluno.profissao = "Desenvolvedor";
console.log(aluno);

//Remover uma propriedade
delete aluno.curso;

console.log(aluno);

//Criando um objeto com funções

let pessoa = {
    nome: "João",

    falar: function(){
        console.log("Olá, bom dia!" + this.nome);
    
    },
};   

pessoa.nome;
pessoa.falar();

//criar um objeto

let carro ={
    modelo: "Range Rover",
    Ano : 2012,
    
    ligar: function(){
        console.log("O carro" + this.modelo + "está ligado");
    }
    
};

console.log( carro.modelo);
console.log( carro.Ano);
carro.ligar();

    

