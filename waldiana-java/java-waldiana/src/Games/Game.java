package Games;



    import java.util.Scanner;

    public class Game{
        static Scanner sc = new Scanner(System.in);
        static int Pontos= 0;
        static Calcular calc;

        public static void main(String[]args){
            Game.jogar();
        }
        public static void jogar(){
            System.out.println("Informe o nível de dificuldade[1,2,3,ou 4");
            int dificuldade = Game.sc.nextInt();
            Game.calc = new Calcular(dificuldade);

            System.out.println("Informe o resultado para a seguinte operação");

            //somar
            if(calc.getOperacao()==0){
                System.out.println(calc.getValor1() + " +"+ calc.getValor2());
                int resposta = Game.sc.nextInt();
                if (calc.somar(resposta)){
                    Game.Pontos++;
                    System.out.println("Você tem " + Game.Pontos + "Pontos(s).");

                }
            }else if(calc.getOperacao() ==2) {
                System.out.println(calc.getValor1() + "-" + calc.getValor2());
                int resposta = Game.sc.nextInt();
                if (calc.subtrair(resposta)) {
                    Game.Pontos++;
                    System.out.println("Você tem " + Game.Pontos + "Ponto(s).");

                }
            }else if (calc.getOperacao()==2){
                System.out.println(calc.getValor1()+ "*" + calc.getValor2());
                int resposta = Game.sc.nextInt();
                if (calc.multiplicar(resposta)){
                    Game.Pontos++;
                    System.out.println("Você tem" + Game.Pontos + "Ponto(s).");
                }


            }



            System.out.println("Você deseja Continuar: [1] sim| [2]não)");
            int continuar = Game.sc.nextInt();

            if (continuar ==1) {
                Game.jogar();
            } else{
                System.exit(0);

            }
    }
}
