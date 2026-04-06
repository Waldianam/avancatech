package InterfaceGUI;
import javax.swing.*;
import java.awt.*;
import java.util.Random;

public class Frases {
    public static void main(String[] args) {
        JFrame tela = new JFrame("Minha Primeira Janela");


        tela.setSize(1280, 720);
        tela.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        //criar uma lista de frases
        String[] frases = {
                "Hello 1.",//0
                "Good Morning 2.",//1
                "Frase 3.",//2
                "Frase 4.",//3
                "Frase 5.",//4
        };

        Random aleatorio = new Random();

        //Setar o texto na minha
        JLabel texto= new JLabel ( frases[0]);
        texto.setFont(new Font("Arial", Font.BOLD,16));
        texto.setForeground(Color.WHITE);

        //DEFINIR O NOSSO PAINEL
        JPanel painelTexto = new JPanel();
        painelTexto.setBackground(new Color(30,30,30));
        painelTexto.add(texto);
        //Criando um botao


        JButton botao = new JButton("Nova Frase");
        botao.setFont (new Font("Arial", Font.BOLD,16));
        botao.setBackground(new Color (21,120,215));
        botao.setForeground(Color.WHITE);
        botao.setFocusPainted(false);

        //Lambda(forma avançada de criar função)

        botao.addActionListener(e ->{
            int i = aleatorio.nextInt(frases.length);
            texto.setText(frases[i]);
        });


        JPanel painelBotao = new JPanel();
        painelBotao.setBackground(new Color(50,50,50));
        painelBotao.add(botao);

        tela.add(painelTexto, BorderLayout.CENTER);
        tela.add(painelBotao, BorderLayout.SOUTH);


        tela.setVisible(true);


    }

}
