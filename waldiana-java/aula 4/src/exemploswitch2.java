public class exemploswitch2 { //incio class
public static void main( String[]args){ //inicio main
    String pais = "Brasil";

    switch(pais) {
        case "Brasil":
        case "Portugal":
            System.out.println("Bom dia");
            break;
        case "Mexico":
        case "Argentina":
        case "Espanha":

            System.out.println("Buenos Dias");
            break;
        case "França":
            System.out.println("Bon jour");

        default:
            System.out.println("Good Morning");

    }




    }
}
