(function () {
    /*
    Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
    métodos semelhantes aos que existem no array, mas que sirvam para os
    elementos do DOM selecionados.
    Crie os seguintes métodos:
    - forEach, map, filter, reduce, reduceRight, every e some.
    Crie também métodos que verificam o tipo do objeto passado por parâmetro.
    Esses métodos não precisam depender de criar um novo elmento do DOM, podem
    ser métodos estáticos.
    Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
    no objeto, como nos exemplos abaixo:
    DOM.isArray([1, 2, 3]); // true
    DOM.isFunction(function() {}); // true
    DOM.isNumber('numero'); // false
    Crie os seguintes métodos para verificação de tipo:
    - isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
    O método isNull deve retornar `true` se o valor for null ou undefined.
    */
   function DOM(no){
    this.element = document.querySelectorAll(no);
  }
  
  DOM.prototype.on = function on(eventType, callback){
    Array.prototype.forEach.call(this.element, function(element){
      element.addEventListener(eventType, callback, false)
    })
  }
  DOM.prototype.off = function off(eventType, callback){
    Array.prototype.forEach.call(this.element, function(element){
      element.removeEventListener(eventType, callback, false)
    })
  }
  
  DOM.prototype.get = function get(){
    return this.element;
  }

  DOM.prototype.forEach = function forEachD(){
    return Array.prototype.forEach.apply(this.element, arguments)
  }

  DOM.prototype.map = function map(){
    return Array.prototype.map.apply(this.element, arguments)
  }

  DOM.prototype.filter = function filter(){
    return Array.prototype.filter.apply(this.element, arguments)
  }

  DOM.prototype.reduce = function reduce(){
    return Array.prototype.reduce.apply(this.element, arguments)
  }

  DOM.prototype.reduceRight = function reduceRight(){
    return Array.prototype.reduceRight.apply(this.element, arguments)
  }

  DOM.prototype.some = function some(){
    return Array.prototype.some.apply(this.element, arguments)
  }

  DOM.prototype.every = function every(){
    return Array.prototype.every.apply(this.element, arguments)
  }

  DOM.prototype.isArray = function isArray(pamp){
    return Object.prototype.toString.call(pamp) === '[object Array]';
  }

  DOM.prototype.isObject = function isObject(pamp){
    return Object.prototype.toString.call(pamp) === '[object Object]';
  }

  DOM.prototype.isFunction = function isFunction(pamp){
    return Object.prototype.toString.call(pamp) === '[object Function]';
  }

  DOM.prototype.isNumber = function isNumber(pamp){
    return Object.prototype.toString.call(pamp) === '[object Number]';
  }

  DOM.prototype.isString = function isString(pamp){
    return Object.prototype.toString.call(pamp) === '[object String]';
  }

  DOM.prototype.isBoolean = function isBoolean(pamp){
    return Object.prototype.toString.call(pamp) === '[object Boolean]';
  }
  DOM.prototype.isNull = function isNull(pamp){
    return Object.prototype.toString.call(pamp) === '[object Null]'
    || Object.prototype.toString.call(pamp) === '[object Undefined]'
  }
  console.log(typeof null)
  //isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.

  // essa estrutura acima serve para todos os outros
let dom = new DOM();
  console.log(dom.isNull(null));

  var $a = new DOM('[data-js="link"]');
  $a.on('click', function handClick(e) {
    e.preventDefault();
    console.log('clicou');
    $a.off('click', handClick )
  });

  $a.forEach(function(item, index, array){
    console.log(index)
    console.log(item)
    console.log(array)
  })


  console.log('Elementos selecionados:', $a.get());
  console.log('$a é filho de body?', $a.get()[0].parentNode === document.body);
})()