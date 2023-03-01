import { useState, useEffect} from 'react';


export default function welcome(props){
   
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [counter, setCounter] = useState(0);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [semaforo, setSemaforo] = useState(false);
    const { message , name} = props

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        console.log(semaforo);
    }, [semaforo]);



    const contar = () => {
        console.log("entrando en la funcion de contar")
        setCounter(counter + 1);
        setSemaforo(!semaforo);// va a cambiar el semaforo a lo contrario! :P 
    }
    return (
        <div>
            <h1> "Hola {name}" </h1>
            <h1> "contador {counter + 1}" </h1>
   
            <p>El semaforo esta en color {semaforo ? 'red' : 'green'} </p> 


            <h2>Contador de React con Hooks</h2>
            <button type="submit" onClick={contar}>Aumentar</button>
        </div>
       
    );
}