(function ($) {
    'use strict';
    /*
    Vamos estruturar um pequeno app utilizando módulos.
    Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
    A primeira etapa vai ser o cadastro de veículos, de deverá funcionar da
    seguinte forma:
    - No início do arquivo, deverá ter as informações da sua empresa - nome e
    telefone (já vamos ver como isso vai ser feito)
    - Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
    um formulário para cadastro do carro, com os seguintes campos:
      - Imagem do carro (deverá aceitar uma URL)
      - Marca / Modelo
      - Ano
      - Placa
      - Cor
      - e um botão "Cadastrar"
    Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
    carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
    aparecer no final da tabela.
    Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
    empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
    Dê um nome para a empresa e um telefone fictício, preechendo essas informações
    no arquivo company.json que já está criado.
    Essas informações devem ser adicionadas no HTML via Ajax.
    Parte técnica:
    Separe o nosso módulo de DOM criado nas últimas aulas em
    um arquivo DOM.js.
    E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
    que será nomeado de "app".
    */

    let app = (function (){
    
        return {
            init: function init() {

                this.get('http://localhost:3000/company', this.getCompanyInfo);
                this.initEvents();
                

            },

            initEvents: function initEvents(){
                $('[data-js="formulario"]').on('submit', this.handleSubmit);
            },

            get: function get(url, calback){
                let ajax = new XMLHttpRequest();
                ajax.open('GET', url);
                ajax.send();
                ajax.addEventListener('readystatechange', calback, false);
            },

            submit_data_car: function submit_data_car(){
                let ajax = new XMLHttpRequest();
                ajax.open('POST','http://localhost:3000/dadosCarros')
                ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

                let carro = {
                    url: $('[data-js="url"]').get().value,
                    marca:$('[data-js="marca"]').get().value,
                    ano: $('[data-js="ano"]').get().value,
                    placa: $('[data-js="placa"]').get().value,
                    cor: $('[data-js="cor"]').get().value
                }

                ajax.send(
                    'url='+carro.url+
                    '&marca='+carro.marca+
                    '&ano='+carro.ano+
                    '&placa='+carro.placa+
                    '&cor='+carro.cor
                )
            
            },
            getCompanyInfo: function getCompanyInfo(){
               if(app.isReady.call(this)){
                    return;
                }
                    
                let data = JSON.parse(this.responseText);

                let $companyName = $('[data-js="empresa"]');
                let $companyPhone = $('[data-js="contato"]');
                $companyName.get().textContent = data.name;
                $companyPhone.get().textContent = data.phone;

            },
            
            isReady: function isReady(){
                return this.readyState === 4 && this.status === 4;
            },

            handleSubmit: function handleSubmit(event){
                event.preventDefault();
                let $tablecar = $('[data-js="table-Info"]').get();
                $tablecar.appendChild(app.getDados());

            },
            getDados: function getDados(){
                
                let fragment = document.createDocumentFragment();
                let tr = document.createElement('tr')
                let marca = document.createElement('td');
                let ano = document.createElement('td');
                let placa = document.createElement('td');
                let cor = document.createElement('td');
                let imagem = document.createElement('td');
                let imagem2 = document.createElement('img');
                
                imagem2.src =$('[data-js="url"]').get().value;
                imagem.appendChild(imagem2);
                marca.textContent = $('[data-js="marca"]').get().value;
                ano.textContent = $('[data-js="ano"]').get().value;
                placa.textContent = $('[data-js="placa"]').get().value;
                cor.textContent = $('[data-js="cor"]').get().value;

                tr.appendChild(imagem);
                tr.appendChild(marca);
                tr.appendChild(ano);
                tr.appendChild(placa);
                tr.appendChild(cor);

                this.submit_data_car();

                return fragment.appendChild(tr);
            }









        };

    })();
    app.init();

})(window.DOM);
