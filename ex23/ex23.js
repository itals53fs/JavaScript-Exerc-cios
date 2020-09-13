(function () {
    'use strict'
    /*
    Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
    As regras são:
    - Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
    diretamente;
    - O input deve iniciar com valor zero;
    - Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
    - Deve haver 4 botões para as operações principais: soma (+), subtração(-),
    multiplicação(x) e divisão(÷);
    - Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
    que irá limpar o input, deixando-o com valor 0;
    - A cada número pressionado, o input deve atualizar concatenando cada valor
    digitado, como em uma calculadora real;
    - Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
    operação no input. Se o último caractere no input já for um símbolo de alguma
    operação, esse caractere deve ser substituído pelo último pressionado.
    Exemplo:
    - Se o input tem os valores: "1+2+", e for pressionado o botão de
    multiplicação (x), então no input deve aparecer "1+2x".
    - Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
    input;
    - Ao pressionar o botão "CE", o input deve ficar zerado.
    */
    let $layout = document.querySelector('input[data-js="layout"]');
    let $botoes = document.querySelectorAll('button[data-js="number"]');
    let $soma = document.querySelector('button[data-id="soma"]');
    let $subtracao = document.querySelector('button[data-id="subtracao"]');
    let $multiplicacao = document.querySelector('button[data-id="multiplicacao"]');
    let $divisao = document.querySelector('button[data-id="divisao"]');
    let $igual = document.querySelector('button[data-id="igual"]');
    let $CE = document.querySelector('button[data-id="CE"]');
    let $operacoes = document.querySelectorAll('button[data-js="op"]')

    Array.prototype.forEach.call($botoes, function(e){
        e.addEventListener('click', acresentar, false);  
    })
    Array.prototype.forEach.call($operacoes, function(e){
        e.addEventListener('click', operacao, false);
    })

    $CE.addEventListener('click', reset, false);
    
    function acresentar(event){
        $layout.value += this.value;
    }
    function reset(){
        $layout.value = 0;
    }
    function operacao(){
        $layout.value += this.value;
        if(verificarOp()){
           $layout.value =  $layout.value.slice(0, -2);
        }
    }
    function verificarOp(){
        let op = ['+', '-', '/', '*'];
        let lastItem = $layout.value.split('').pop();
        return op.some(function(e){
            return e === lastItem;
        })
    }
})();