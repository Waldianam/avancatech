import java.util.Scanner;
public class exercicio4 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int pin = 12364;
        int senhaDigitada = 0;
        int tentativas = 3;
        while (tentativas > 0) {
            tentativas--;
            System.out.println("Digite Sua senha:");
            senhaDigitada = sc.nextInt();
            if (senhaDigitada == pin) ;
            System.out.println("VocÊ digitou s senha correta");
            break;
        } else{
            System.out.println("Você perdeu uma tentativa, Digite Novamente");


        }

    }
     if(tentativas <=0)

    {
        System.out.println("Voce não tem mais tentativas,você errou demais");
    }
}

