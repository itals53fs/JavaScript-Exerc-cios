(function () {
    'use strict'
    let usuarios = [];
    let $nome = document.querySelector('input[data-js="nome"]');
    let $cpf = document.querySelector('input[data-js="cpf"]');
    let $email = document.querySelector('input[data-js="email"]');
    let $pesquisa = document.querySelector('input[data-js="pesquisa"]');
    let $pesquisar = document.querySelector('button[data-js="pesquisar"]');
    let $resposta = document.querySelector('input[data-js="resposta"]');
    let $cadastro = document.querySelector('button[data-js="cadastro"]');
    console.log('a')
    $pesquisar.addEventListener('click', resp, false);
    $cadastro.addEventListener('click', cadastro, false);
    console.log($cadastro)

    function cadastro() {

        usuarios.push({
            nome: $nome.value,
            email: $email.value,
            cpf: $cpf.value
        })
        console.log(usuarios);
        console.log('eus');
    }

    function resp(usurio) {
        usuarios.forEach(e => {
            if (e.nome == $pesquisa.value) {
                res.innerHTML =`Nome: ${e.nome} <br> CPF: ${e.cpf} <br> e-mail: ${e.email}`;
            }

        })
        console.log('eus');

    }
})();