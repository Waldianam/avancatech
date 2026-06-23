import React from "react";

function Home(){

    //Array
    const produtos = ["notebook", "SmartPhone", "Tablet"];
    const empresas = [<li>Apple</li>,<li>Google</li>, <li>Amazon</li>]

    const livros = [
        {nome: "A Game of Thrones", ano: 1996, fisico:true},
        {nome: "Harry Potter", ano: 2000},
        {nome: "A Clash of Kings", ano }
    ]
    return(
        <>
        <p>{produtos[2]}</p>
        <ul>{empresas}</ul>
        <ul>
            {
                livros.filter(livro=> Livro.ano > 1998).map(livro =>(<li key={Livro.nome}>
                <li key={Livro.nome}>
                    {livro.nome}, {livro.ano}
                    </li>
                ))

            }
        </ul>

        </>
    );
}
export default Home;







