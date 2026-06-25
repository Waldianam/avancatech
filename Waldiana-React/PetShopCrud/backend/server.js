const express = require("express");
const cors = require("cors");


const db = require("./db");


const app = express();


app.use(cors());


app.use(express.json());


/*
LISTAR PRODUTOS
*/
app.get("/clientes", (req, res) => {


    const sql = "SELECT * FROM clientes";


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
app.post("/clientes", (req, res) => {


    const {
        nome,
        endereco,
        telefone,
        email
    } = req.body;


    const sql =
        "INSERT INTO clientes(nome,endereco,telefone,email) VALUES(?,?,?,?)";


    db.query(
        sql,
        [
            nome,
            endereco,
            telefone,
            email
        ],
        (erro) => {


            if (erro) {


                return res.status(500).json(erro);


            }


            res.json({
                mensagem: "Cliente cadastrado com sucesso!"
            });


        }
    );


});


/*
BUSCAR POR ID
*/
app.get("/clientes/:id", (req, res) => {


    const sql =
        "SELECT * FROM clientes WHERE id=?";


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
app.put("/clientes/:id", (req, res) => {


    const {
        nome,
        endereco,
        telefone,
        email
    } = req.body;


    const sql =
        "UPDATE clientes SET nome=?, endereco=?, email=?, telefone=? WHERE id=?";


    db.query(
        sql,
        [
            nome,
            endereco,
            telefone,
            email,
            req.params.id
        ],
        (erro) => {


            if (erro) {


                return res.status(500).json(erro);


            }


            res.json({
                mensagem: "Cliente atualizado!"
            });


        }
    );


});


/*
EXCLUIR PRODUTO
*/
app.delete("/clientes/:id", (req, res) => {


    const sql =
        "DELETE FROM clientes WHERE id=?";


    db.query(
        sql,
        [req.params.id],
        (erro) => {


            if (erro) {


                return res.status(500).json(erro);


            }


            res.json({
                mensagem: "Cliente excluído!"
            });


        }
    );


});
app.listen(3001, () => {


    console.log(
        "Servidor rodando na porta 3001"
    );


});





