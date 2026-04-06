package TCC_Biblioteca.model;

public class Livro {
    public static int contador = 1;

    private int codigo;
    private String titulo;
    private String autor;
    private boolean emprestado;

    public Livro(String titulo, String autor) {
        this.codigo = contador++;
        this.titulo = titulo;
        this.autor = autor;
        this.emprestado = false;
    }

        public  int getCodigo() {
            return this.codigo;
        }

        public String  getTitulo() {
            return this.titulo;
        }
        public boolean estaEmprestado() {
            return this.emprestado;
        }
        public void emprestar() {
            emprestado = true;
        }
        public void devolver(){
            emprestado = false;

        }

        public String toString(){
            return  "Codigo: "+ this.codigo +
                    "\ntitulo: "+ this.titulo +
                    "\nautor: " + this.autor +
                    "\nemprestado: " + this.emprestado;
        }
}
