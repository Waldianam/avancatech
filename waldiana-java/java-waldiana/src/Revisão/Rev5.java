package Revisão;
import java.util.Scanner;

/// //=====ex1=======
public class Rev5 {
    public static void main(String[]args){
        Scanner scanner= new Scanner(System.in);
        System.out.print("Digite sua idade");
        int idade = scanner.nextInt();
        boolean tem_ingresso = true;

        if(idade>=18 && tem_ingresso){
        System.out.println("Entrada Liberada");
        }else{
            System.out.println("Entrada não permitida");
        }





    }
}
