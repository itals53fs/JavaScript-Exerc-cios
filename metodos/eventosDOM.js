(function(win, doc){
    'use strict';
    
    //.parenttNode pega o nó do pai, ou seja o pai de seu pai.
    let $main = document.querySelector('.main');
    console.log($main.parentNode);

    // .childNodes oega o filho
    console.log($main.childNodes);

    // firstChild pega o primeiro filho
    console.log($main.firstChild);

    // lastChild pega o ultimo filho
    console.log($main.lastChild);

    //nextSibling mostra o irmão
    console.log($main.nextSibling);

    // previousSibling pega o irmão anterior
    console.log($main.previousSibling);

    // nodeType mostra o tipo
    console.log($main.nodeType);
    console.log(document.querySelector('.main-footer').nodeType);

    //nodeValue
    console.log($main.nodeValue);
    console.log(document.querySelector('.main-content').firstChild.nodeValue)
    console.log(document.querySelector('.main-content').firstChild.nextSibling.nodeValue)
    //nodeName mostra o nome da tag
    console.log($main.nodeName);
    console.log(document.querySelector('.main-content').firstChild.nodeName);

    // cuniuse.com

    // agora não pega os epaços, não é padronizada
    console.log($main.children);
    console.log($main.firstElementChild);
    console.log($main.nextElementSibling);
    console.log($main.childElementCount); // qauntiddae de elementos ou
    console.log($main.children.lenght);

    

    //Métodos
    // .hasAttribute(name) ferifica se tem o atributo return true or false
    //.hasAttrubutes
    console.log($main.hasAttribute('data-js'))
    console.log($main.hasAttributes());
     // appendclid(child)
    let $mainHeader = document.querySelector('.main-header')
    let $mainContent = document.querySelector('.main-content')
    console.log($mainContent.appendChild($mainHeader))
    // nese caso pegamos o main-header e colocamos no main-section, ficou 
    // no final de todos nós

    // .inseetBefore()
    let $firstText = $mainContent.firstChild;
    $mainContent.insertBefore($mainHeader, $firstText);
    // nessecaso iseriu o $mainHeader antes do $fisrtText, isso dentro do $mainContent


    // .cloneNode(boolean). Copiar o conteudo do conteiner
    let $cloneMainheader = $mainHeader.cloneNode(true);
    $mainContent.appendChild($cloneMainheader)
    console.log(document.querySelectorAll('.main-header').length)

    //hasChildNodes(), verifica se o emeneto tem um nó filho
    let $h1 = $mainHeader.firstElementChild;
    console.log($h1.hasChildNodes());

    //.removeChild(child)
    $mainHeader.removeChild($h1)

    //.replaceChild(new, old) remove e dd
    let $mainFooter = document.querySelector('main-footer');
    //$main.replaceChild($mainHeader, $mainFooter);

    //document.createTextNode(text)
    let newTextNode = document.createTextNode('opa! Novo p');
    $main.appendChild(newTextNode);

    let $newP = document.createElement('p');
    $newP.appendChild(newTextNode);
    $main.appendChild($newP)

    //Atrutos
    // element.id
    // get set

    console.log($main.id);
    console.log($main.className);
    // pega o atributo que vc quer
    console.log($main.getAttribute('data-js')) // return sempre string

    $main.setAttribute('data-js', 'main11'); //subsritui o já existente
    $main.setAttribute('data-js2', 'main22') // cria um novo.


    // Manipular o dom com perfomace
    let fregment = document.createDocumentFragment();
    let childP = document.createElement('p');
    let textChild = document.createTextNode('texto da tag P');
    childP.appendChild(textChild);
    fregment.appendChild(childP);
    
    document.body.appendChild(fregment);
    
    let Marca = document.createElement('td');
    // document = DOMContentLoaded
    function after(){

        let fregment = document.createDocumentFragment();
        let childP = document.createElement('p');
        let textChild = document.createTextNode('texto da tag P');
        childP.appendChild(textChild);
        fregment.appendChild(childP);
        
        document.body.appendChild(fregment);
    }
    function afterWindownLoad(){
        alert('AfterWindownLoad')
    }
    
    window.addEventListener('load', afterWindownLoad, false)
    document.addEventListener('DOMContentLoaded', after, false);

})(window, document);