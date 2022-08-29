//arreglos en javascript   los arreglos van en llaves cuadradas []

const arreglo = [1,2,3,4];
//arreglo.push (1)
//arreglo.push (2)
//arreglo.push (3)
//arreglo.push (4)
//arreglo.push (5)
let arreglo2 = [...arreglo,5,6,7];
const arreglo3 = arreglo2.map( function(numero){
return numero * 3;
});
//const arreglo3 = arreglo2.map()
console.log (arreglo);
console.log (arreglo2);
console.log (arreglo3);
// los arreglos son objetos en JS y no se recomienda el uso de push porque