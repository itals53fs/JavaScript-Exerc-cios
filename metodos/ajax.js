(function () {// serve para fezer requisições na mesmo domini sem precisar
    // carregar toda a tela.
    // 404 não encontrado
    // 200 ok
    // 403
    // 500
    //window.XMLHttpRequest
    let $body = document.querySelector('body');
    
    let $button = document.createElement('button');

    $button.setAttribute('data-js', 'stop');

    $body.appendChild($button);

    $button.addEventListener('click', stop, false);

    let tempo;
    var ajax = new XMLHttpRequest();

    ajax.open('GET', 'data.json');

    ajax.send();

    //onreadystatechange ele ver quando o estado mudou (evento)
    ajax.onreadystatechange = function () {

    };
    //ou

    ajax.addEventListener('readystatechange', function () {
        
        // manipular resposta da requisição
        if(isRequestOk()){
            let data = JSON.parse(ajax.responseText);
            //console.log(`${Object.keys(data)[0]}: ${data.messege}`);
            //console.log(ajax.responseXML)
            //throw new SyntaxError('Mesege de erro');
            
        }else{
            console.log('Deu um problema')
        }
        // verificar o estado atual
        //console.log(' estado atual', ajax.readyState, ajax.status)
        // 0:  não enviado (open não é chamado)
        // 1: conexão aberta
        // 2: headers recebidos
        // 3: caregando o corpo so request
        // 4: concluido

    }, false)

    function isRequestOk(){
        return ajax.readyState == ajax.readyState && ajax.status == 200;
    }

    function stop() {
        clearTimeout(tempo)
    }

    function time() {
        console.log(ajax.readyState)
        tempo = setTimeout(time, 100)
        if (ajax.readyState == 4)
            stop();
    }
    //time();

    /*const http = require('http')
    http.createServer(function(req, res){
        res.end('Gerenciador tales');
    }).listen(8080);*/

})();
