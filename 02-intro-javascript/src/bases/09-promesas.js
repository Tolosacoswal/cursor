//promesas 
// este es el codigo de una promesa 
import { getHeroeById } from "./bases/08-muliples-exportaciones"; 
//const promesa = new  Promise((resolve,reject)=>{
//    setTimeout(()=>{
//        const heroe = getHeroeById(2);
        
//        resolve(heroe);
//    },2000)
//});
//promesa.then((heroe)=>{
//    console.log('heroe', heroe)
//})
//.catch(err => console.warn(err));

const getHeroeByIdAsync =(id)=>{
    return new  Promise((resolve,reject)=>{
           setTimeout(()=>{
                const heroe = getHeroeById(id);
                if (heroe){
                    resolve(heroe);
                }else{
                    reject(`no se encontro heroe`);

                }

                
                //resolve(heroe);
            },2000)
        });
        
}
getHeroeByIdAsync(1)
.then( console.log)
.catch( console.war);