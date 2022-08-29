// desestructurar arreglos 
//esta primer forma es valida pero muy extensa 
/*  const personajes = ['luffy','zoro','shanks'];
console.log (personajes [0]);
console.log (personajes [1]);
console.log (personajes [2]);*/
//a continuacion vamos a ver otra forma de desestructurar areglos (arrays)
//para cambiar una palabra o reasignar un nuevo valor dejamos el cursor sobre la palabra y presionamos f2 para windows y podemos reemplazar
// para llamar un dato como vemos abajo que llamamos p3 (shanks) ponemos una coma por cada uno de los elementos que queremos no llamar en este caso son dos comas por los elementos p1 p2 
const personajes = ['luffy','zoro','shanks'];
const [,,p3]= personajes;
console.log(p3);
const retornaArreglo =()=>{
    return [ 'ABC',123.];
}
const [letras, numeros]= retornaArreglo();
console.log(letras,numeros );

const useState = (valor)=> {
    return [ valor, ()=> (console.log('hola mundo'))];
}
const [nombre, setNombre] = useState ( 'goku');
console.log(nombre);
setNombre();