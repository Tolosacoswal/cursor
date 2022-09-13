import { useState} from 'react'
import { PropTypes } from "prop-types";



export const CounterApp = ({value}) => {
  console.log (`render`);
  const [ counter, setCounter,] = useState(value)
<<<<<<< HEAD
  const handleAdd = ()=> {
setCounter( (counter)=> counter + 2);
}
const handleSubstarct = () => setCounter(counter -2);
const handleReset = () => setCounter(value);
=======
  const suma = ()=> {setCounter( (counter)=> counter + 1);}
const resta = () => setCounter(counter -1);
const limpiar = () => setCounter( value );
>>>>>>> 702a211a19a1bcdc5cae27ec8e49ce357a8c47b8

  
  
  return (
    <>
    <h1>CounterApp</h1>
    <h2>{ counter }</h2>
    
<<<<<<< HEAD
    <button onClick={ handleAdd }>+1</button>
    <button onClick={ handleSubstarct }>-1</button>
    <button onClick={ handleReset }>reset</button>
=======
    <button onClick={ suma }>aumenta</button>
    <button onClick={ resta }>restar</button>
    <button onClick={ limpiar }>limpiar</button>
>>>>>>> 702a211a19a1bcdc5cae27ec8e49ce357a8c47b8



    </>
  )
}
CounterApp.prototype={
    CounterApp: PropTypes.string.isRequired, 
   value:PropTypes.string,
}
