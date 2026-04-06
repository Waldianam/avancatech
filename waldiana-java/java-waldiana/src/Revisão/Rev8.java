package Revisão;
import java.util.Scanner;

public class Rev8 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Digite um número para começar ");
        int numero_inicial = scanner.nextInt();
        System.out.println("Digite um número para terminar");
        int numero_final = scanner.nextInt();
        int contador = numero_inicial;
        while (contador <= numero_final) {
            System.out.println("contador:" + contador);
            contador++;

        }
        /// ///=====ex. 2=======/////////
        System.out.println("Digite sua senha");
        String senha = scanner.nextLine();

        while (!senha.equals("admin1234")) {
            System.out.println("acesso negado:");
            senha = scanner.nextLine();


        }
        /// //=====ex.3======///////total de compras
        double valor;
        double soma_total = 0.0;

        System.out.println("Digite os valores das compras(digite 0 para encerrar):");

        while (true) {
            System.out.print("Valor:");
            valor = scanner.nextDouble();
            if (valor == 0) {
                break;
            }
            soma_total += valor;
        }
        System.out.println("\nSoma Total das compras:" + soma_total);
        System.out.println("0 - Programa encerrado");


        /// //====ex.4=======///////

        System.out.println("Digite um número inteiro");
        int numero = scanner.nextInt();
        while(numero!=7) {
            System.out.println("numero:" + numero);
            numero++;
            if (numero == 7) {
                System.out.println("número correto");

            }
        }
            /// /=====ex.5======////

            double valor2;
             double soma_das_notas= 0.0;
             
            System.out.println("\n Digite várias notas(digite 0 para encerrar)") ;
            while(true){
                System.out.print("notas:");
                valor2 = scanner.nextDouble();
                if(valor2==0){
                    break;

                }
                valor2 += soma_das_notas;



            }
            System.out.println("\n soma das notas:" + soma_das_notas );
            System.out.println("0- Programa encerrado") ;

        }


    }






















