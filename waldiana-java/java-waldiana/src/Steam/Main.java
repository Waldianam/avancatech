package Steam;

import java.util.ArrayList;
import java.util.InputMismatchException;
import java.util.Scanner;

public class Main {

    static Scanner teclado = new Scanner(System.in);
    static ArrayList<Jogos> jogos = new ArrayList<>();

    public static void main(String[] args) {

        //Carregar os jogos que ja tao salvos

        jogos= Arquivos.carregar();
        int opcao = 0;
        while(opcao!= 5){
            System.out.println("========😮‍💨😮‍💨👾Steam Tech👾======");
            System.out.println("1 - Adicionar um jogo");
            System.out.println("2 - Listar jogos");
            System.out.println("3 - Remover um jogo");
            System.out.println("4 - Salvar os jogos");
            System.out.println("5 - Sair do sistema");

            try {
                opcao = teclado.nextInt();
                teclado.nextLine();

                switch (opcao) {
                    case 1:
                        adicionarJogo();
                        break;
                    case 2:
                        listarJogo();
                        break;
                    case 3:
                        removerJogo();
                        break;
                    case 4:
                        Arquivos.Salvar(jogos);
                        break;
                    case 5:
                        System.out.println("Saindo do sistema");

                        break;
                    default:
                        System.out.println("Valor Invalido");
                }
            }catch(InputMismatchException e){
                    System.out.println("Digite apenas Numeros");
                    teclado.nextLine();

                }
            }
        }
        public static void adicionarJogo(){
            System.out.println("======Adicionando um Jogo");
            System.out.println("Digite o nome do jogo");
            String nome = teclado.nextLine();

            System.out.println("Digite o preço do jogo");
            double preco = teclado.nextDouble();
            teclado.nextLine();

            System.out.println("Digite o Genero do jogo");
            String genero = teclado.nextLine();
            teclado.nextLine();

            jogos.add(new Jogos(nome,preco,genero));

            System.out.println("\nJogo Adicionado com sucesso!!!🤪");


        }
        public static void listarJogo() {

            if (jogos.isEmpty()) {
                System.out.println("Nenhum jogo cadastrado!!!");
                return;

            }
            for (int i = 0; i < jogos.size(); i++) {
                System.out.println(i + " -");
                jogos.get(i).mostrar();
            }
        }
        public static void removerJogo(){
            listarJogo();

                System.out.println("Digite o ID");
                int id = teclado.nextInt();

                jogos.remove(id);

                System.out.println("Jogo Removido");




            }


    }

