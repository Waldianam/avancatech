package Banco.view;



import Banco.helper.Utils;
import Banco.model.Cliente;
import Banco.model.Conta;

public class Teste {

    public static void main(String[] args) {

        Cliente felicity = new Cliente(
                "Felicity Jones",
                "felicity@gmail.com",
                "123.456.789.01",
                Utils.stringParaData("17/05/1981")
        );

        Cliente angelina = new Cliente(
                "Angelina Jolie",
                "angelina@gmail.com",
                "234.567.890.12",
                Utils.stringParaData("23/02/1978")
        );



        Conta c101 = new Conta(felicity);
        Conta c102 = new Conta(angelina);

        //Depositando um valor positivo
        c101.depositar(500.00);
        c102.depositar(500.00);

        c101.setLimite(200.0);



        c101.transferir(c102, 100.0);


        System.out.println(c101);
        System.out.println();
        System.out.println(c102);

    }

}

