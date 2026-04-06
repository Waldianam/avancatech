package Games;
import java.util.Random;

public class Calcular {
    private int dificuldade;
    private int valor1;
    private int valor2;
    private int operacao;
    private int resultado;

    //Criando o Construtor

    public Calcular(int dificuldade) {
        Random rand = new Random();
        this.dificuldade = dificuldade;
        this.operacao = rand.nextInt(3);

        if (dificuldade == 1) {
            this.valor1 = rand.nextInt(10); //0 a 9
            this.valor2 = rand.nextInt(10);//0 a9
        } else if (dificuldade == 2) {
            this.valor1 = rand.nextInt(100);
            this.valor2 = rand.nextInt(1000);
        } else if (dificuldade == 3) {
            this.valor1 = rand.nextInt();
            this.valor2 = rand.nextInt();
        } else if (dificuldade == 4) {
            this.valor1 = rand.nextInt(10000);
            this.valor2 = rand.nextInt(10000);
        } else {
            this.valor1 = rand.nextInt(100000);
            this.valor2 = rand.nextInt(100000);
        }

    }


    public int getDificuldade() {
        return dificuldade;
    }

    public int getValor1() {
        return valor1;
    }

    public int getValor2() {
        return valor2;
    }

    public int getOperacao() {
        return operacao;
    }

    public int getResultado() {
        return resultado;


    }

    //mostrar classe public String to String(){
    public String toString() {
        String Op;
        if (this.getOperacao() == 0) {
            Op = "Somar";
        } else if (this.getOperacao() == 1) {
            Op = "Subtrair";
        } else if (this.getOperacao() == 2) {
            Op = "Multiplicar";
        } else {
            Op = "Operação Desconhecida";
        }
        return "valor1:" + this.getValor1() +
                "\nValor 2: " + this.getValor2() +
                "\nDificuldade:" + this.getDificuldade() +
                "\nOperacao: " + Op;
    }

    //criar as nossas funções para funcionar o programa
    public boolean somar(int resultado) {
        this.resultado = this.getValor1() + this.getValor2();
        boolean certo = false;
        /// vou verificar se meu this.resultado é igual ao meu resultado
        if (resultado == this.getResultado()) {
            System.out.println("Resposta correta!");
            certo = true;

        } else {
            System.out.println("Resposta Errada");

        }
        System.out.println(this.getValor1() + " + " + this.getValor2() + " = " + this.getResultado());
        return certo;
    }

    /// //criar uma função de subtrair //criar uma função de multiplicar
    ///
    ///
    public boolean subtrair(int resultado) {
        this.resultado = this.getValor1() - this.getValor2();
        boolean certo = false;
        if (resultado == this.getResultado()) {
            System.out.println("Resposta Correta");
            certo = true;
        } else {
            System.out.println("Resposta errada!");

        }
        System.out.println(this.getValor1() + " -" + this.getValor2() + " = " + this.getResultado());
        return certo;
    }

    public boolean multiplicar(int resultado) {
        this.resultado = this.getValor1() * this.getValor2();
        boolean certo = false;
        if (resultado == this.getResultado()) {
            System.out.println("Resposta Correta");
            certo = true;
        } else {
            System.out.println("Resposta Errada");
        }
        return certo;
    }







}
