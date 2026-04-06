import java.util.Scanner;


public class exemplowhile2 {
    public static void main (String []args){
        Scanner sc = new Scanner (System.in);
        //inicializador
        int numero = 1;
        while(numero!=0){
            System.out.println("Digite o numero 0 para sair:");
            numero = sc.nextInt();
        }
    }
}
