function myfunction(a,b,c,d){
    console.log(this.lastname, a,b,c);
}
let obj = {
    name: 'tales',
    lastname: 'félix'
}
myfunction.call(obj,1,2,3);

myfunction(myfunction, 1, 2);

let vet = [1,2,3,4,5,6]
 
myfunction.apply(obj, vet)

// .prototype
function Myfunction2(name, lastname){
this.name = name;
this.lastname = lastname;
}
Myfunction2.prototype.fullName = function(){
    return `${this.name} ${this.lastname}`;
}
let tales = new Myfunction2('tales', 'felix')
console.log(tales.fullName());

Myfunction2.prototype.age = 30;
console.log(tales.age)

// Array like
function myfunction3(){
    Array.prototype.forEach.call(arguments, (item, index)=>{
        console.log(item);
    })
}
myfunction3(1,3,4,5,6,7);