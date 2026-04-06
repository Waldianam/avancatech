package TCC_Biblioteca.model;

public class Emprestimo {
    private Livro livro;
    private Usuario usuario;

    public Emprestimo(Livro livro,Usuario usuario){
        this.livro = livro;
        this.usuario = usuario;



    }

    public String toString(){
      return  "Livro: "+this.livro.getTitulo()+
              "\nUsuario:" + this.usuario.getNome();
    }


























}
