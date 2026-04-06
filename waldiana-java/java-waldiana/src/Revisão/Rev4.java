package Revisão;
import java.util.Scanner;

public class Rev4 {
    public static void main(String[]args){
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite a temperatura");
        double temperatura = scanner.nextDouble();

        if (temperatura>=35){
            System.out.println("Dia muito quente");

        }else{
            System.out.println("Clima Agradável");
        }

        /// // ex.2=======
        System.out.print("Digite a energia");
        int energia = scanner.nextInt();

        if(energia >=20) {
            System.out.println("Energia Suficiente");
        }else{
            System.out.println("Energia Baixa");

        }
        scanner.nextLine();
        //====ex3========
        System.out.print("Digite sua senha");
        String senha = scanner.nextLine();

        if (senha.equals("admin")) {
            System.out.println("Acesso Permitido");
        }else{
            System.out.println("Senha Incorreta");
        }
        System.out.println("\n---------\n");

        /// /=====ex.4=======
        double valorDolar;
        double cotaçao = 5.00;
        double valorReais;

        System.out.print("Digite o valor de um produto em dolar");
        valorDolar = scanner.nextDouble();
        valorReais = valorDolar* cotaçao;
        System.out.println("Valor em reais:R$"+ valorReais);

        if(valorReais>=500) {
            System.out.println("Produto taxado");
        }else{
            System.out.println("Produto isento de taxa");

        }

    /// ////=====ex.5===========


        System.out.print("Digite o número de vidas do personagem");
        int vidas = scanner.nextInt();
        if (vidas>=0) {
            System.out.println("Game Over");
        }else{
            System.out.println("Personagem vivo");
        }
        }





        }








