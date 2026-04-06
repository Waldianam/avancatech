
import java.util.Scanner;
public class ex1{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        //dois números para o usuario
        System.out.println("digite um número:");
        int num1 = sc.nextInt();

        System.out.println("Digite o segundo número:");
        int num2 = sc.nextInt();
        System.out.println("numero1+numero2 " + (num1+num2));
        System.out.println("numero1-número2" + (num1-num2));
        System.out.println("numero1*número2" + (num1*num2));
        System.out.println("número1/número2" + (num1/num2));
        System.out.println("número1% número2" + (num1 % num2))
        ;

    }
}
