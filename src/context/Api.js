import React from 'react';
// const axios = require('axios');

// export const instance = axios.create({
//     baseURL: 'https://pi1-sbc.herokuapp.com/',
//     // timeout: 5000,
//     headers: {'Content-Type': 'application/json'},
//     responseType: 'json',
//     responseEncoding: 'utf8',
// });

export const Api = async ({endpoint, method, data, token}) => {
    const rawResponse = await fetch('https://pi1-sbc.herokuapp.com/' + endpoint, {
        method: method ? method : 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token ? token : ''}`,
        },
        body: JSON.stringify(data)
    });
    const content = await rawResponse.json();

    console.log(content);
    return content;
};



// instance.post('autenticacao', {
//     email: 'teste@teste.com',
//     password: 'teste'
// }).then(({data}) => {
//     console.log(data)
// });

// instance.post('autenticacao', {
//     email: 'teste@teste.com',
//     password: 'teste'
// }).then(({data}) => {
//     console.log(data)
// });

// instance.post('usuario', {
//     "bairro": "string",
//     "cep": "string",
//     "cidade": "string",
//     "complemento": "string",
//     "email": "string",
//     "identidade": "string",
//     "info_complementar": "string",
//     "logradouro": "string",
//     "nome": "string",
//     "numero": "string",
//     "profissao": "string",
//     "sexo": "M",
//     "sobrenome": "string",
//     "tel_celular": "string",
//     "tel_comercial": "string",
//     "tel_comercial2": "string",
//     "tel_comercial3": "string",
//     "uf": "AC"
//   }).then(({data}) => {
//     console.log(data)
// });







