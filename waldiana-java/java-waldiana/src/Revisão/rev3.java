package Revisão;
import java.util.Scanner;


public class rev3 {
    // ----ex1
    public static void main(String[]args){
        Scanner scanner = new Scanner(System.in);
        System.out.println("Digite seu nome");
        String nome = scanner.nextLine();



        /// ====ex.2=======

        System.out.println("Digite seu jogo favorito");
        String  jogo_favorito = scanner.nextLine();

        ///====== ex.3//=======

        System.out.print("Pontuação inicial");
        int pontuação = scanner.nextInt();
        scanner.nextLine();


        System.out.println("meu nome é " + nome + " meu jogo favorito é "+ jogo_favorito + " minha pontuação é " + pontuação);

        /// ======ex.5=========
        // criar variavel com nome do filme/nota do filme/mostrar na tela
        System.out.println("digite o nome do filme");
        String nome_do_filme = scanner.nextLine();
        System.out.println ("Digite a nota do filme");
        double nota_do_filme = scanner.nextDouble();
        System.out.println("o filme que eu escolhi foi: "+ nome_do_filme + " e a nota que eu coloque foi "+ nota_do_filme);














        /// ex4/////
        System.out.println("digite qual é o valor de entrada");
        double valor_de_entrada = scanner.nextDouble();

        System.out.println("Digite qual é o valor de saída");
        double valor_de_saida = scanner.nextDouble();
        double resultado = valor_de_entrada - valor_de_saida ;


        System.out.println(" A compra foi de R$:"  + resultado);

        //======ex.6=======
        System.out.println("Digite a marca do veículo");
        String marca_do_veículo = scanner.nextLine();

        System.out.println("Digite o ano do veículo");
        int ano_do_veículo = scanner.nextInt();
        System.out.println("digite o valor do veículo");
        double valor_do_veículo = scanner.nextDouble();


        System.out.println(" A marca do veículo é:"  + marca_do_veículo + " O ano do veículo é "  + ano_do_veículo +
                " o valor do veículo é"  + valor_do_veículo);
        /// /======ex.7======= nome do evento/qtd de participantes/se oevento é gratuito

        String evento = scanner.nextLine();
        int qtd_participantes = scanner.nextInt();
        boolean gratuito = true;
        boolean pago = false;
        System.out.println(" O evento é:" + gratuito);
















    }

}
