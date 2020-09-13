(function(){
    'use strict';
    let $body = document.querySelector('body');
    let div = document.createElement('div');
    div.appendChild(document.createTextNode('tales'))
    $body.appendChild(div);

    createNewtag($body, 'div', 'data-js', 'container', 'Tales, mãe, Deia Glaidson e Nandinha');

    let $OneButton = document.querySelector('button[id="One"]');

    
    $OneButton.addEventListener('click',click, false);
    
    function click(){
        alert('clicou')
    }

    function createNewtag(
        here,
        tag,
        prop,
        valeuProp,
        text){
        let $tag = document.createElement(tag);
        $tag.setAttribute(prop, valeuProp);
        $tag.appendChild(document.createTextNode(text))
        here.appendChild($tag);
        
    }
    console.log($body.parentElement);
    console.log($body.parentNode);

    let $footer = document.querySelector('footer');
    $footer.setAttribute('data-js', 'footerOne');
    console.log($footer.parentElement)
    console.log($footer.parentNode)

    // pegar os filhos dos elementos
    console.log($body.childNodes) 
    console.log($body.children)
    console.log($body.childElementCount)
    console.log($body.firstChild)
    console.log($body.firstElementChild)
    console.log($body.hasAttribute('main'))
    console.log($body.hasAttributes())

    console.log($footer.nodeName)
        console.log($footer.className)
        console.log($footer.getAttribute('data-js'))
        
    // outro teste
   function CreateNewtag(no){
       this.element = document.querySelector(no)
   }

   CreateNewtag.prototype.newTag = function newTag(tag){
       let new1 = document.createElement(tag);
       this.element.appendChild(new1);
   }
   let $tag1 = new CreateNewtag('body')
   console.log($tag1.newTag('p'))
})();