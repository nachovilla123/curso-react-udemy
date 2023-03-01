import { useState } from 'react';


export default function welcome(props){
   
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [counter, setCounter] = useState(0);
    const { message , name} = props
    return (
        <div>
            <h1> "Hola {name}" </h1>
            <h1> "contador {counter}" </h1>
   
            <h2>Contador de React con Hooks</h2>
            <button type="submit" onClick={()=> setCounter(counter + 1)}>Aumentar</button>
        </div>
       
    );
}