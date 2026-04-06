package Steam;

public class Jogos {
    String Nome;
    Double Preco;
    String Genero;

    public Jogos(String Nome,Double Preco,String Genero) {
        this.Nome = Nome;
        this.Preco = Preco;
        this.Genero = Genero;
    }

        void mostrar(){
            System.out.println("Nome:" + this.Nome);
            System.out.println("Preco:"+ this.Preco);
            System.out.println("Genero:" + this.Genero);
        }
    }

