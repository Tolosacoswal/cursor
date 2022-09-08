import { PropTypes } from "prop-types";

export const CounterApp = ({value}) => {
    const handleApp = ()=> {
        console.log(`+1`);
        value = 1000;
        console.log(1000);
    }
  return (
    <>
    <h1>CounterApp</h1>
    <h2>{ value }</h2>
    <button onClick={ handleApp }>
        +1
    </button>

    </>  
  );
}
CounterApp.propType={
     
    value:PropTypes.number
}