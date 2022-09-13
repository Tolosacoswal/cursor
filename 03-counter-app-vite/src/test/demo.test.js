describe("pruebas en <demoComponent/>", ()=>{

test ("esta prueba no debe fallar",() => {
const mensaje1= "hola";
const mensaje2 = mensaje1.trim();
expect (mensaje1).toBe(mensaje2);
});
})


