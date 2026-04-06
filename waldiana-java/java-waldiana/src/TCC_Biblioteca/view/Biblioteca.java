package TCC_Biblioteca.view;


import TCC_Biblioteca.helper.Utils;
import TCC_Biblioteca.model.Livro;
import TCC_Biblioteca.model.Usuario;

import java.util.ArrayList;
import java.util.Scanner;

public class Biblioteca {
    static Scanner teclado = new Scanner(System.in);
    static ArrayList<Livro> livros = new ArrayList<>();
    static ArrayList<Usuario> usuarios = new ArrayList<>();


    public static void main(String[] args) {
        Menu();
    }

    public static void Menu() {
        System.out.println("--------Biblioteca Avança Tech-------");
        System.out.println("1- Cadastrar Livro");
        System.out.println("2 - Cadastrar Usuário");
        System.out.println("3 - Emprestar Livro");
        System.out.println("4 - Devolver Livro");
        System.out.println("5 - Listar livro");
        System.out.println("6 - Listar Usuario");
        System.out.println("7 - Sair");

        int opcao = teclado.nextInt();
        teclado.nextLine();

        switch (opcao) {
            case 1:
                cadastrarLivro();
                break;
            case 2:
                cadastrarUsuario();
                break;
            case 3:
                emprestarLivro();
                break;

            case 4:
                devolverLivro();
                break;
            case 5:
                listarLivro();
                break;
            case 6:
                listarUsuario();
                break;
            case 7:
                System.exit(0);


        }
        Utils.pausar(2);
        Menu();
    }

    public static void cadastrarLivro() {
        System.out.println("\n======= Cadastrando Livro =========\n");
        System.out.print("Titulo do Livro: ");
        String titulo = teclado.nextLine();

        System.out.print("Autor: ");
        String autor = teclado.nextLine();

        Livro l1 = new Livro(titulo, autor);

        livros.add(l1);//adicionando o livro em uma lista(criando uma estante)

        System.out.println("📖 Livro Cadastrado com Sucesso!!!📖\n");
    }

    public static void cadastrarUsuario() {
        System.out.println("\n=========== Cadastrando Usuario ======\n");
        System.out.print("Digite seu nome: ");
        String usuario = teclado.nextLine();

        Usuario u1 = new Usuario(usuario); //criando um novo objeto do tipo usuario
        usuarios.add(u1);
        System.out.println("👍🏽Usuario Cadastrado com sucesso!!!👍🏽\n");

    }

    public static Livro buscarLivro(int codigo) {
        for (Livro l : livros) {
            if (l.getCodigo() == codigo) {
                return l;
            }

        }
        return null;
    }

    public static void emprestarLivro() {
        System.out.println("\n=========Pegando Livro Emprestado======\n");
        System.out.println("===========Digite o código do Livro=========\n");
        int code = teclado.nextInt();

        Livro l1 = buscarLivro(code);

        if (l1 != null && l1.estaEmprestado() == false) {
            l1.emprestar();
            System.out.println("📖Livro Emprestado!!📖\n");
        } else {
            System.out.println("👎🏽Livro Indisponível!!!👎🏽\n");
        }
    }

    public static void devolverLivro() {

        System.out.println("\n=======Devolvendo Livro=======\n");
        System.out.println("\n=======Digite o código do livro: ");
        int code = teclado.nextInt();

        Livro l1 = buscarLivro(code);

        if (l1 != null) {
            l1.devolver();
            System.out.println("📖Livro Devolvido!!!📖\n");
        }
    }


    public static void listarLivro() {

        for(Livro l :livros){
            System.out.println(l);
            System.out.println();


        }
    }
    public static void listarUsuario() {
        for (Usuario u : usuarios) {
            System.out.println(u);
            System.out.println();
        }
    }















}
