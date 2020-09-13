(function () {
    'use strict'
    /*
    1. Envolva todo o conteúdo desse desafio em uma IIFE.
    2. Adicione a diretiva 'use strict';
    3. Crie um arquivo index.html e adicione esse script à ele.
    */

    /*
    Crie uma função chamada `cleanCPF`, que receba um CPF por parâmetro, e
    retorne esse CPF limpo (somente os números).
    Usando os CPFs abaixo, mostre no console que a limpeza funciona para todos
    eles! Use um console.log para cada CPF.
    - "049-214 3421-1"
    - "210.458.522-05"
    - "735 500 794 - 22"
    - "101.123-131x32"
    */
    console.log('Limpando CPFs:');
    let cpf = "049-214 3421-1"
    const cleanCPF = (cpf) => {
        return cpf.match(/\d/g).join('')
    }
    //ou
    let cleanCPF1 = (cpf) => {
        return cpf.replace(/\D/g, '');
    }
    console.log(cleanCPF("049-214 3421-1"))
    console.log(cleanCPF1("101.123-131x32"))

    /*
    Usando os CPFs limpos acima, deixe-os com a formatação correta de CPF.
    Ex.: "999.999.999-99"
    Mostre o resultado no console.
    */
    console.log('\nFormatando CPFs corretamente:');
    const cpfCorreto = (cpf) => {
        let CPF = cpf.match(/(\d\d\d)|(\d\d)/g).join('.')
        CPF = CPF.match(/(\S\S\S\S\S\S\S\S\S\S\S)|(\d\d)/g).join('-')
        return CPF;
    }
    //ou
    let CPFsvet = ["049-214 3421-1", "210.458.522-05", "735 500 794 - 22", "101.123-131x32"]
    CPFsvet.forEach(e=>{
        console.log(cleanCPF1(e).replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4'))
    })
    // ous
    CPFsvet.forEach(e=>{
        console.log(cleanCPF1(e).replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,
            (regex, arg1, arg2, arg3, arg4)=>{
                return `${arg1}.${arg2}.${arg3}-${arg4}`;
            }
        ))
        })
    /*
    Crie uma expressão regular que faça match com as palavras "junho" ou "julho",
    usando o mínimo de caracteres possíveis na regex.
    Para garantir que a regex funciona, teste-a usando o método match. Se houver
    o match, o método retorna um array com os matches. Caso contrário, ele
    retornará null.
    Mostre no console o resultado do match para a frase:
    "Os meses de janeiro, junho e julho começam com a letra j."
    O resultado deve ser:
    ["junho", "julho"]
    */
    console.log('\nMatch com as palavras "junho" ou "julho" para a frase "Os meses de janeiro, junho e julho começam com a letra j.":');
    let mes = /\w{5}/g
    let txt1 = "Match com as palavras 'junho' ou 'julho' para a frase ";
    let a = txt1.match(mes)
    console.log(a)
    /*
    Crie uma expressão regular que faça o match com a abertura de uma tag
    HTML qualquer.
    Ex.: "<div>", "<section>", "<blockquote>".
    Use o método match e faça o teste com a marcação abaixo:
    "<div><section><blockquote>Texto <img /></blockquote></section></div>"
    O resultado deve ser:
    ["<div>", "<section>", "<blockquote>"]
    */
    console.log('\nMatch com a abertura de uma tag HTML:');
    let div = /<\w+>/g
    txt1 = "<div><section><blockquote>Texto <img /></blockquote></section></div>";
    a = txt1.match(div);
    console.log(a)

    /*
    Crie uma expressão regular que faça o match com uma tag HTML vazia, casando
    com a abertura e fechamento da tag.
    Ex.: "<div></div>", "<section></section>", "<blockquote></blockquote>".
    Use o método match e faça o teste com a marcação abaixo:
    "<div><ul><li></li><li></li><li><span></span></li></ul></div>"
    O resultado deve ser:
    ["<li></li>", "<li></li>", "<span></span>"]
    */
    div = /<\w+><\/\w+>/g;
    console.log('\nMatch com tags HTML vazias (abertura e fechamento da tag):');
    txt1 = "<div><ul><li></li><li></li><li><span></span></li></ul></div>";
    a = txt1.match(div);
    console.log(a)
    /*
    Vamos complicar um pouco agora :D
    Crie uma expressão regular que faça o match com um texto existente dentro de
    uma tag HTML. O texto deve ser capturado e substituído por:
    'O texto dentro da tag "[NOME DA TAG]" é "[TEXTO]"'
    Use a marcação abaixo para fazer o replace:
    "<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>"
    A marcação deve permanecer como está, somente o texto deve ser substituído.
    No replace, utilize quebras de linha para deixar uma tag por linha.
    O resultado deve ser esse:
    <h1> texto dentro da Otag "h1" é "Título da página"</h1>
    <p>O texto dentro da tag "p" é "Este é um parágrafo"</p>
    <footer>O texto dentro da tag "footer" é "Rodapé"</footer>
    Uma dica: faça o match aos poucos. Para facilitar o teste, use o site
    https://regex101.com/#javascript e verifique se as capturas estão
    corretas, para depois aplicar no código ;)
    */
    console.log('\nFazer replace dos textos das tags:');
    console.log("<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>".replace(
        /<(\w+)>([^>]+)<\/(\w+)>/gm, '<$1> texto dentro da tag $1 é $2 </$3>\n'
    ))
    //ou
    console.log('\n\n');

    console.log("<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>".replace(
        /<(\w+)>(.+)<\/(\1)>/gm, '<$1> texto dentro da tag $1 é $2 </$1>\n'
    ))

})();