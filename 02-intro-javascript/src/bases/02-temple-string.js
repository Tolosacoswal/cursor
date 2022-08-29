const Nombre = 'Edgar'
const Apellido = 'Alzate';
//const nombreCompleto = Nombre + ' ' + Apellido;
const nombreCompleto = 
`
${Nombre} 
${Apellido}
${5*9}
`;

function getSaludo(){
    return 'hola ' + Nombre;

}

console.log (`este es un texto: ${getSaludo (Nombre)}`);