package TCC_Biblioteca.view;


import TCC_Biblioteca.model.Emprestimo;
import TCC_Biblioteca.model.Livro;
import TCC_Biblioteca.model.Usuario;

public class Teste {
    public static void main(String[]args){
        Livro l1= new Livro("A Moreninha", "Joaquim Manoel de Macedo");
        Livro l2 = new Livro ("Jogos Vorazes","Suzanne Colins");
        System.out.println(l1 );
        System.out.println(l2);

        Usuario u1 = new Usuario("Waldiana");
        System.out.println(u1);
        System.out.println(l1);

        Emprestimo e1= new Emprestimo(l1,u1);


}



        }
