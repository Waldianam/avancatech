import java.util.Scanner;
public class ex3{
        public static void main(String[]args){
            Scanner sc = new Scanner(System.in);
            //Dois números para o usuário
            System.out.println("Digite um número");
            int num1 =sc.nextInt();
            System.out.println("Digite o segundo número");
            int num2 =sc.nextInt();
            if(num1>num2){
                System.out.println("O número1 é maior que o número2");
            }
            if(num1<num2){
                System.out.println("O número1 é menor que o número 2");

            }
            if(num1!=num2) {
                System.out.println("O número1 é diferente que o número2");
            }
            if(num1 ==num2){
                System.out.println("O número1 é igual ao número2");

            }
        }
}