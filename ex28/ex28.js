(function ($) {
    'use strict'
    /*
    No HTML:
    - Crie um formulário com um input de texto que receberá um CEP e um botão
    de submit;
    - Crie uma estrutura HTML para receber informações de endereço:
    "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
    preenchidas com os dados da requisição feita no JS.
    - Crie uma área que receberá mensagens com o status da requisição:
    "Carregando, sucesso ou erro."
    No JS:
    - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
    deve ser limpo e enviado somente os números para a requisição abaixo;
    - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
    "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
    no input criado no HTML;
    - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
    com os dados recebidos.
    - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
    a mensagem: "Buscando informações para o CEP [CEP]..."
    - Se não houver dados para o CEP entrado, mostrar a mensagem:
    "Não encontramos o endereço para o CEP [CEP]."
    - Se houver endereço para o CEP digitado, mostre a mensagem:
    "Endereço referente ao CEP [CEP]:"
    - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
    adicionar as informações em tela.
    */

    //exportand o codigo
    function app(){
    
        let $formCPE = new DOM('[data-js="forme-cep"]');
        let $inputCEP = new DOM('[data-js="input-cep"]');
        let $cepInfo = new DOM('[data-js="cidade"]');
    
        let $logadouro = new DOM('[data-js="logadouro"]');
        let $cidade = new DOM('[data-js="cidade"]')
        let $bairro = new DOM('[data-js="bairro"]')
        let $estado = new DOM('[data-js="estado"]')
        let $CEP = new DOM('[data-js="cep"]')
        let $status = new DOM('[data-js="status"]')
        
        $formCPE.on('submit', handleSubmitForm)
    
        let ajax = new XMLHttpRequest();
    
        function handleSubmitForm(event) {
            event.preventDefault()
            let url = getURL();
            ajax.open('GET', url);
            ajax.send();
            mensagem('loading');
            ajax.addEventListener('readystatechange', handleReady, false);
        }
        function getURL(){
            let verificar = clearCEP();
            return 'https://ws.apicep.com/cep/[cepCode].json'.replace(
                '[cepCode]', verificar);
        }
        function clearCEP(){
            return $inputCEP.get().value.replace(/\D/g, '');
        }
    
        function handleReady() {
            if (isresOK()) {
                mensagem('ok');
                fillCEPFields();
                
        
            } else {
               mensagem('loading')
    
            }
        }
        function isresOK(){
            return ajax.readyState === 4 && ajax.status === 200;
        }
        function fillCEPFields(){
            let data = parseData();
            console.log(data)
           
            if(data.ok == false){
                mensagem('erro')
            }
            
            $logadouro.get().textContent = data.address;
            $cidade.get().textContent = data.city;
            $estado.get().textContent = data.state;
            $CEP.get().textContent = data.code;
            $bairro.get().textContent = data.district;
    
        }
    
        function parseData(){
            let result;
            try{
                return JSON.parse(ajax.responseText);
            }
            catch(e){
                result = null;
            }
            return result;
        }
    
        function mensagem(type){
            let cep = clearCEP();
            let cep1 = `${cep.slice(0,2)}.${cep.slice(2,5)}-${cep.slice(5)}`;
            let messege =  {
                loading:`Buscando informações para o CEP: ${cep1} ...`,
                ok:`Endereço referente ao CEP: ${cep1}.`,
                erro: `Não encontramos o endereço para o CEP: ${cep1}.`
            }
            $status.get().textContent = messege[type];
        }
        console.log($status)
    
    }
        app();

    // refezendo masi com o objeto global this
})(window.DOM);
