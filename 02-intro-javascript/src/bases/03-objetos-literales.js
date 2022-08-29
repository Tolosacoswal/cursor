

const persona = {
nombre: `Karol`,
Apellido: 'Cruz',
edad: 30,
actitud: `jode por todo`,
datosAdicionales: {
    ciudad: 'bogota',
    barrio:'kennedy',
    celular: 3202793164,
    sexo: 'femenino',


}

};

//console.table ({persona});


const persona2 = {...persona};
persona2.nombre = 'giovanny';

console.log(persona);
 console.log(persona2);