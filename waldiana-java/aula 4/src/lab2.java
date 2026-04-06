import java.util.Scanner;

public class lab2{

    public static void main(String args[]) {
        Scanner sc = new Scanner (System.in);
        System.out.println("Digite um numero:");
        int num = sc.nextInt();
        if (num% 2 ==1) {
            System.out.println("impar");

        } else{
            System.out.println("par");
        }


    }
}
