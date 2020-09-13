(function () {
    //'use strict' // use strict não permite a declaração de variavel sem o var
    var obj = {
        propOne: {
            propTwo: {
                prop3: {
                    p1: 'p1',
                    p2: 'p2',
                    p3: 'p3',
                }
            }
        }
    }

    console.log(obj.propOne.propTwo.prop3.p1)
    with(obj.propOne.propTwo.prop3){ // para não confundir as variaveis aqui dentro não é permitido o
        console.log(p1);                // use strict com essa diretiva
    }
    //console.log(this)

    function nome(nome){
        return this.nome;
    }
    console.log(new nome('tales'));


    function Tales(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }

    let tales = new Tales('Tales', 'Félix');
    console.log(tales);
})();