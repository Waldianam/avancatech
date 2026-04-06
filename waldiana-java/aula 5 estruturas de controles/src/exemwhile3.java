import java.util.Scanner;
public class exemplowhile3 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);


        String senha = "";
        String senhacorreta = "java1234";
        int tentativas = 3;
        //teste de permanência
        while (!senha.equals(senhacorreta)) {
            System.out.println("Digite a senha:");
            senha = sc.nextLine();
            tentativas--;
            if (tentativas < 0) {
                System.out.println("Voce não tem mais tentativas");

                break;
            }
        }
        System.out.println("Senha correta, voce conectou");

    }
}

