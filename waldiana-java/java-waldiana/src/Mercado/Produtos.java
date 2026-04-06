package Mercado;

public class Produtos {
    public static int contador = 1;

    private int codigo;
    private String nome;
    private double preco;


    //Construtor que recebe um nome e um preço, e dentro dele o código recebe o valor do contador. //depois o contador
    //ele aumenta em 1;

    public Produtos(String nome, double preco){
        this.codigo = Produtos.contador;
        this.nome = nome;
        this.preco = preco;
        Produtos.contador++;

    }






    /// Getters e Setters do Nome e do Preco

    public String getNome(){
        return this.nome;
    }
    public void setNome(String nome){
        this.nome = nome;

    }
    //fazer o Get e Set do preço
    public double getPreco(){
        return this.preco;
    }
    public void setPreco(double preco){
        this.preco = preco;


    }
    //get do nosso Codigo
    public int getCodigo(){
        return this.codigo;

    }
    //Metodo tostring//codigo//nome//preco:utilitarios.double.eparastrings
    public String toString(){
        return "Código" + this.getCodigo()+
                "\nNome:" +this.getNome()+
                "\nPreço" +Utilitarios.doubleParaString(this.getPreco());
    }

}
