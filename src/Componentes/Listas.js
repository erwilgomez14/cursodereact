import React, {Fragment, useState} from 'react';
// import Lista from './Componentes/Lista'
const Listas = () => {

    const [arrayN, setN] = useState([1,2,3,5,6,7]);

    const [N, setn] = useState(5);

    const addElement = () => {

        setn(N + 1)

        // console.log('click')
        setN([...arrayN, N])
    }

    return ( 
        <Fragment>
            <h2>Listas</h2>

            <button onClick={addElement}>Agregar elemento</button>
            {
                arrayN.map((item, key) =>
                    <p key={key}>{item} - {key} </p>
                )
            }
        </Fragment>
     );
}
 
export default Listas ;