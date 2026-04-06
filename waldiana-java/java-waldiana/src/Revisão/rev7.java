package Revisão;

import java.util.Scanner;

public class rev7 {
    public static void  main(String[]args){
        for(int i =1;i<=20; i++){
            System.out.println(+i);
        }

        /// / ex. 2====/////
        for(int i =10; i>=0 ;i--){
            System.out.println(i);
        }
        /// /ex3 ====
        for(int i = 0; i<=50 ; i++){
            if (i % 2 ==0){
                System.out.println(i);
            }


        }
                /// ///==== ex.4=======//////
        Scanner scanner=new Scanner(System.in);
        System.out.println("Digite um número");
        int numero = scanner.nextInt();

        for(int i =1; i<=10;i++){
            System.out.println(i*numero);

        }/// /////======ex.5=========//////

        System.out.println("Digite um número inteiro e positivo");
        int numero2 = scanner.nextInt();
        for(int i =1; i<=numero2; i++){
            System.out.println(i+numero2);
        }
    }





}



