//desestructuracion
//asignacion desestructurante
const persona = {
    nombre:`karol`,
    edad: 30,
    clave: `doña`,
    rango:`sugar mommy`

};
//const{edad, clave, nombre}= persona;

//console.log (nombre);
//console.log (edad);
//console.log (clave);
// si no esta definido en la parte superior ejemplo rango entonces podemos definirlo abajo  de esta linea como muestra el ejemplo 
const userContext = ({clave,nombre, edad, rango = `pareja`}) => {
    //const{edad, clave, nombre}= usuario;
    //console.log (nombre,edad, rango);
    return  {
        nombreClave: clave,
        años: edad,
        lating: {
            lat: 45456,
            ing: 12349
        }
    }
}
const {nombreClave, años,lating:{lat,ing,}} = userContext (persona,);
console.log (nombreClave,años, );
console.log (lat,ing);

//la funcion useContext adquiere sentido en proximos videos pues es incrustada por el y no por mi 
//para extraer informacion anidada  tomamos la varible ej lating y le damos abrir corchetes para destructurar el obejo basicamente dejar su contenido en partes para separar 