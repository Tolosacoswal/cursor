import { useState} from 'react'
import { PropTypes } from "prop-types";



export const CounterApp = ({value}) => {
  console.log (`render`);
  const [ counter, setCounter,] = useState(value)
  const suma = ()=> {setCounter( (counter)=> counter + 1);}
const resta = () => setCounter(counter -1);
const limpiar = () => setCounter( value );

  
  
  return (
    <>
    <h1>CounterApp</h1>
    <h2>{ counter }</h2>
    
    <button onClick={ suma }>aumenta</button>
    <button onClick={ resta }>restar</button>
    <button onClick={ limpiar }>limpiar</button>



    </>
  )
}
CounterApp.prototype={
    CounterApp: PropTypes.string.isRequired, 
   value:PropTypes.string,
}
