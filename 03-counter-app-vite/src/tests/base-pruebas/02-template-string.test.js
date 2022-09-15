import{ getSaludo }from "../../base-pruebas/02-template-string"

describe('pruebas en 02-template-string', () => { 
    test('getSaludo debe retornar `hola Edgar`', () => { 

        const name = `Edgar`;
        const message = getSaludo( name );
        expect( message ).toBe(`hola ${ name }`)
     });
 }); 