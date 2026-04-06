package aula11;

public class ReceitaBolo {
    private String cobertura;
    private String sabor;
    private double preco;
    private String peso;
    private String frutas;
    //criando o construtor
    public ReceitaBolo(String cobertura, String sabor)
    {
        this.cobertura = cobertura;
        this.sabor = sabor;
        this.preco = 13.00;
        this.peso = "1Kg";
        this.frutas = "Sem Frutas";
    }
    public ReceitaBolo(String cobertura, String sabor, double preco, String peso , String frutas)
    {
        this.cobertura = cobertura;
        this.sabor = sabor;
        this.preco = 13.00;
        this.peso = "1 Kg";
        this.frutas = "Sem frutas";
    }

    public void MostrarBolo(){
        System.out.println("Cobertura:"+ cobertura);
        System.out.println("Sabor;"+ sabor);
        System.out.println("preco;" + preco);
        System.out.println("peso"+ peso);
        System.out.println("frutas" + frutas);
    }

}
