package Aula_7;

public class Aluno {
    public String nome;
    public static int contagemAlunos = 0;

    public Aluno(String nome) {
        this.nome = nome;
        contagemAlunos++;

    }

    public String getnome() {

        return nome;
    }

    public void setNome() {
        this.nome = nome;
    }
}
