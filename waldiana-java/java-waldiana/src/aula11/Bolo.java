package aula11;

public class Bolo{
    public static void main(String[]args){

        ReceitaBolo boloSimples = new ReceitaBolo ("Chocolate", "Fuba");

        ReceitaBolo boloCompleto = new ReceitaBolo ("Nutella" ,  "chocolate", 30.00, "3Kg" ,
                "Morango");
        System.out.println("\n----------\n");
        System.out.println("Bolo Simples");
        boloSimples.MostrarBolo();
    }

}
