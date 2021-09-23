const express = require('express');
const { v4: uuid } = require('uuid');
const app = express();

app.use(express.json());

const customers = [];

app.post('/account', (request, response) => {
    const { cpf, nome} = request.body;
    
    customers.push({
        cpf,
        nome,
        uuid,
        statement: []
    })

    return response.status(201).send('Conta criada com sucesso!')
});

app.listen((3333), () => {
    console.log('Servidor do banco Fin rodando...');
});