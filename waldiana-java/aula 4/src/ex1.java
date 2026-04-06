import java.util.Scanner;
public class ex1 {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.println(" digite Qual foi a sua nota");
        int nota = sc.nextInt();
        if(nota<5) {
            System.out.println("Você está reprovado: sua nota foi" + nota);
        }else if (nota <7){
            System.out.println("Voce ficou de recuperação");
        } else{
                System.out.println("voce foi aprovado. sua nota foi" + nota);
        }
    }
}


