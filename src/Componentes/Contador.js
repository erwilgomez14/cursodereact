// import React, { useState} from 'react';
import React, { useState, Fragment} from 'react';

// const  = () => {
    // return (  );
// }
 
// export default ;

const Contador = () => {

const [numero, setNumero] = useState(0);

const aumentar = () => {
    console.log('me distes un click')

    setNumero(numero + 1);
}   

const temp = 21

    return (
        <Fragment>
        <h3>Contador {numero}</h3>

        <button onClick={aumentar}> Aumentar</button>

        <h4>Hace frio o calor? 
            {
                temp > 20 ? 'Bueno tu eres marisco?' : 'bulde friosa'
            }
            
        </h4>
        </Fragment>
    );
}
 
export default Contador;