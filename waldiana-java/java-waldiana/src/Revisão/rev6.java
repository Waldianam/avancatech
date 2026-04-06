package Revisão;
import java.util.Scanner;

public class rev6 {
    public static void main(String[]args){
        Scanner scanner= new Scanner(System.in);
        System.out.print("Digite um número para escolher a bebida");

       int bebida= scanner.nextInt();
       switch (bebida) {
           case 1:
               System.out.println("Bebida 1 -Café");
               break;
           case 2:
               System.out.println("Bebida 2 - Chá");
               break;
           case 3:
               System.out.println("Bebida 3 -Suco ");
               break;
           case 4:
               System.out.println("Bebida 4 - Refrigerante");
               break;
           default:
               System.out.println("--------");
       }

               /// /======ex.2======
               System.out.print("Digite um número de 1 a 7 para o dia da semana");
               int dias= scanner.nextInt();
               switch (dias){
                   case 1:
                       System.out.println("Domingo");
                       break;
                   case 2:
                       System.out.println("Segunda - Feira");
                       break;
                   case 3:
                       System.out.println("Terça- Feira");
                       break;
                   case 4:
                       System.out.println("Quarta-feira");
                       break;
                   case 5:
                       System.out.println("Quinta-feira");
                       break;
                   case 6:
                       System.out.println("Sexta-feira");
                       break;
                   case 7:
                       System.out.println("Sábado");
                       break;
                   default:
                       System.out.println("-----------");


               }
               //=====ex. 3=======
        System.out.println("Digite um número para escolher o nível da atividade");
               int nivel= scanner.nextInt();
               switch(nivel){
                   case 1 :
                       System.out.println("Fácil");
                       break;
                   case 2:
                       System.out.println("Médio");
                       break;
                   case 3:
                       System.out.println("Difícil");
                       break;
                   default:
                       System.out.println("-------");
               }

               /// ex.4 ========
        System.out.println("Digite um número de 1 a 4 para escolher a forma de pagamento");
        int pagamento= scanner.nextInt();
        switch(pagamento){
            case 1:
                System.out.println("Dinheiro");
                break;
            case 2:
                System.out.println("Cartão de Crédito");
            break;
            case 3:
                System.out.println("Cartão de Débito");
                break;
            case 4:
                    System.out.println("Pix");
                    break;
            default:
                System.out.println("----------");

        }
        scanner.nextLine();
        System.out.println("Digite uma letra para nota de A a D");
        String Nota = scanner.nextLine();
        switch(Nota){
            case "A":
                System.out.println("Excelente");
                break;
            case "B":
                System.out.println("Bom");
                break;
            case "C":
                System.out.println("Regular");
                break;
            case "D":
                System.out.println("Ruim");
                break;
            default:
                System.out.println("----------");


        }




       }

    }
