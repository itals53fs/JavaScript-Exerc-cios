(function () {
    /*O desafio de hoje será um pequeno projeto: um cronômetro!
    As regras para criação do cronômetro são as seguintes:
    1. Crie um arquivo index.html e adicione esse script a ele;
    2. Crie um campo `input` do tipo `text`, e inicie-o com um valor 0 (zero).
    Ele será o nosso cronômetro;
    3. Crie 3 botões para as ações do cronômetro: Start, Stop e Reset;
    4. Ao clicar em Start, o valor do campo deve ser incrementado de 1 em 1, a
    cada segundo;
    5. Ao clicar em Stop, o cronômetro deve parar de contar;
    6. Ao clicar em Reset, o cronômetro deve zerar e parar de contar.
    Utilize o atributo data-js para nomear o campo e os botões. Você pode
    usar o nome que achar melhor, desde que ele seja semântico, ou seja, o nome
    dado ao elemento HTML deve definir o que o elemento é ou o que ele faz.
    */
    let $inputCro = document.querySelector('input[data-js="text"]');
    $inputCro.value = 0;
    let $buttonStart = document.querySelector('button[data-js="start"]');
    let $buttonStop = document.querySelector('button[data-js="stop"]');
    let $buttonReset = document.querySelector('button[data-js="reset"')
    let temporizador;
    let cont = 0;
    let min = 0;
    let hora = 0;
    let segun = 0;
    $inputCro.value = `${"00"}:${"00"}:${"00"}`;

    $buttonStart.addEventListener('click', time, false);
    $buttonStop.addEventListener('click', stop, false);
    $buttonReset.addEventListener('click', reset, false);


    function time() {
        segun++;
        if (segun == 100) {
            segun = 0;
            min++;
        }
        if (min == 60) {
            hora++
            min = 0
        }
        $inputCro.value = `${hora} : ${min} : ${segun}`
        temporizador = setTimeout(time, 10);
    }

    function reset() {
        stop();
        min = 0;
        hora = 0;
        segun = 0;
        $inputCro.value = `${"00"}:${"00"}:${"00"}`;
    };
    function stop() {
        clearTimeout(temporizador);
    }
})();