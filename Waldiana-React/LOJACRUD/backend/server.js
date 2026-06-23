const express = require("express");
const cors = require("cors");


const db = require("./db");


const app = express();


app.use(cors());


app.use(express.json());


/*
LISTAR PRODUTOS
*/
app.get("/produtos", (req, res) => {


    const sql = "SELECT * FROM produtos";


    db.query(sql, (erro, resultado) => {


        if (erro) {


            return res.status(500).json(erro);


        }


        res.json(resultado);


    });


});


/*
CADASTRAR PRODUTO
*/
app.post("/produtos", (req, res) => {


    const {
        nome,
        categoria,
        preco,
        estoque
    } = req.body;


    const sql =
        "INSERT INTO produtos(nome,categoria,preco,estoque) VALUES(?,?,?,?)";


    db.query(
        sql,
        [
            nome,
            categoria,
            preco,
            estoque
        ],
        (erro) => {


            if (erro) {


                return res.status(500).json(erro);


            }


            res.json({
                mensagem: "Produto cadastrado com sucesso!"
            });


        }
    );


});


/*
BUSCAR POR ID
*/
app.get("/produtos/:id", (req, res) => {


    const sql =
        "SELECT * FROM produtos WHERE id=?";


    db.query(
        sql,
        [req.params.id],
        (erro, resultado) => {


            if (erro) {


                return res.status(500).json(erro);


            }


            res.json(resultado[0]);


        }
    );


});


/*
EDITAR PRODUTO
*/
app.put("/produtos/:id", (req, res) => {


    const {
        nome,
        categoria,
        preco,
        estoque
    } = req.body;


    const sql =
        "UPDATE produtos SET nome=?, categoria=?, preco=?, estoque=? WHERE id=?";


    db.query(
        sql,
        [
            nome,
            categoria,
            preco,
            estoque,
            req.params.id
        ],
        (erro) => {


            if (erro) {


                return res.status(500).json(erro);


            }


            res.json({
                mensagem: "Produto atualizado!"
            });


        }
    );


});


/*
EXCLUIR PRODUTO
*/
app.delete("/produtos/:id", (req, res) => {


    const sql =
        "DELETE FROM produtos WHERE id=?";


    db.query(
        sql,
        [req.params.id],
        (erro) => {


            if (erro) {


                return res.status(500).json(erro);


            }


            res.json({
                mensagem: "Produto excluído!"
            });


        }
    );


});
app.listen(3001, () => {


    console.log(
        "Servidor rodando na porta 3001"
    );


});

