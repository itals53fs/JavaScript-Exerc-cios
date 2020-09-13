(function () {
    /*
    Envolva todo o conteúdo desse arquivo em uma IIFE.
    */

    /*
    Crie um objeto chamado `person`, com as propriedades:
        `name`: String
        `lastname`: String
        `age`: Number
    Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
    de valor para cada propriedade.
    */
    const person = {
        name: 'tales',
        lastname: 'felix',
        age: 22,
    }
    console.log('Propriedades de "person":', Object.keys(person));

    /*
    Mostre no console, em um array, todas as propriedades do objeto acima.
    Não use nenhuma estrutura de repetição, nem crie o array manualmente.
    */

    /*
    Crie um array vazio chamado `books`.
    */
 let books = []

    /*
    Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
    seguintes propriedades:
    `name`: String
    `pages`: Number
    */
    books = [
        {name: 'art', pages: 280},
        {name: 'art2', pages: 90},
        {name: 'art3', pages: 200}
    ]
    
    /*
    Mostre no console todos os livros.
    */
   console.log('\nLista de livros:\n', books);
   books.forEach(element => {
       console.log(element.name)
   });

    console.log('\nLivro que está sendo removido:');
    /*
    Remova o último livro, e mostre-o no console.
    */
    console.log(books.pop())

    console.log('\nAgora sobraram somente os livros:');
    /*
    Mostre no console os livros restantes.
    */
   books.forEach(e=>{
       console.log(e.name)
   })

    /*
    Converta os objetos que ficaram em `books` para strings.
    */
    // ?
    console.log('\nLivros em formato string:');
books = JSON.stringify(books)
    /*
    Mostre os livros nesse formato no console:
    */
    console.log(books)

    /*
    Converta os livros novamente para objeto.
    */
    books = JSON.parse(books)
    console.log('\nAgora os livros são objetos novamente:');
    console.log(books)

    /*
    Mostre no console todas as propriedades e valores de todos os livros,
    no formato abaixo:
        "[PROPRIEDADE]: [VALOR]"
    */
    books.forEach(e=>{
        Object.entries(e).forEach(e1=>{
            console.log(`${e1[0]} : ${e1[1]}`)
        })
    })
// ou
    for(let i = 0; i < Object.keys(books).length; i++){
        for( let y in books[i]){
            console.log(`${y} : ${books[i][y]}`)
        }
    }

    /*
    Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
    seu nome. Adicione seu nome completo no array.
    */
    let myname = ['t', 'a', 'l', 'e', 's']
    console.log('\nMeu nome é:');

    /*
    Juntando todos os itens do array, mostre no console seu nome.
    */
    console.log(myname.join(''))

    console.log('\nMeu nome invertido é:');

    /*
    Ainda usando o objeto acima, mostre no console seu nome invertido.
    */
    console.log(myname.reverse().join(''))

    console.log('\nAgora em ordem alfabética:');
    /*
    Mostre todos os itens do array acima, odenados alfabéticamente.
    */
    console.log(myname.sort().join(''))
})()