import { usContext } from "../../base-pruebas/06-deses-obj";


test('usContext debe retornar un objeto', () => {
    const capitan = clave,
    const  = usContext (capitan);
    console.log (latlng)
    expect(user).toStrictEqual({
        lat: 14.1232,
        lng: -12.3232
    });
 })






// const usContext = ({ clave, nombre, edad, rango = 'Capitán' }) => {


//     // console.log( nombre, edad, rango );
    
//     return {
//         nombreClave: clave,
//         anios: edad,
//         latlng: {
//             lat: 14.1232,
//             lng: -12.3232
//         }
//     }

// }
//  test('getUsuarioActivo debe de retornar un objeto', () => { 
//     const name = `Edgar`;
//     const user = getUsuarioActivo( name );
//                  console.log (user)
//                 expect( user).toStrictEqual({
//                     uid:`ABC567`,
//                     username:name
//                 });
//   })