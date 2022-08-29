//import{heroes} from './data/heroes'
import heroes,{owners} from "../data/heroes";

//console.log (owners);
/*const getHeroeById = (id) => {
    return heroes.find((heroes)=>{
        if( heroes.id === id ){
            return true;
        }else{
            return false;
        }
    });
}*/
//para hacer un return y llamar se logra llegar a este punto de simplificacion para que sea mas facil realizar el codigo 
export const getHeroeById = (id) => heroes.find(heroes=> heroes.id ===id ) 
    //return heroes.find(heroes=> heroes.id === id);
     


//console.log(getHeroeById (5));

export const getHeroesByOwner = (owner)=>heroes.filter((heroes)=>heroes.owner=== owner );
//console.log(getHeroesByOwner("DC"));

//const filterItems = query => {return fruits.filter((el) =>el.toLowerCase().indexOf(query.toLowerCase()) > -1);}