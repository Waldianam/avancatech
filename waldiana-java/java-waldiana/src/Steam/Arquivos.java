package Steam;
import java.io.*;
import java.util.ArrayList;
import java.util.Scanner;

public class Arquivos {
    public static void Salvar(ArrayList<Jogos> jogos){

        try{
            FileWriter arquivo = new FileWriter("jogos.txt");

            for( Jogos j : jogos){
                arquivo.write(j.Nome +";" + j.Preco + ";" + j.Genero + "\n");
            }
            arquivo.close();
            System.out.println("\nJogo salvo com sucesso!!!\n");

        }catch(IOException e){
            System.out.println("\nErro ao salvar o jogo");

        }

    }
    public static ArrayList<Jogos> carregar(){
        ArrayList<Jogos>jogos = new ArrayList<>();



        try{
            File jogo = new File("jogos.txt");
            Scanner leitor = new Scanner(jogo);

            while (leitor.hasNextLine()){
                String linha = leitor.nextLine();
                String[] partes = linha.split(";");

                String nome = partes[0];
                double preco = Double.parseDouble(partes[1]);
                String genero = partes[2];

                jogos.add(new Jogos(nome, preco,genero));
            }
            leitor.close();

        }catch( Exception e){
            System.out.println("\njogo ainda não existe");

        }
        return jogos;



    }


}
