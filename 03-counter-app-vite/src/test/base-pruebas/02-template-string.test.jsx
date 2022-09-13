import { getSaludo } from "../../base-pruebas/02-template-string";

  
  
  describe('pruebas en 02-template-string', () => { 
    test('getSaludo debe de retornar  "hola fernando"', () => { 
const name = `fernando`;
const message = getSaludo( name );
    expect( message ).toBe(`hola ${ name }`)
});
});