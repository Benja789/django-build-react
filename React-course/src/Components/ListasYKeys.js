import React, {useState} from 'react';
import {Button} from '@material-ui/core';

const ListasYKeys = () => {
    const [numero, setNumero] = useState([10,11,12,13,14,15,16,17,18,19]);

    const agregarNumero =(event)=>{
        setNumero([...numero, 5])
    }

    return ( 
        <div align="center">
            <h1>Lista de numeros</h1>
            <div>
                <Button 
                    name="btnAgregar" 
                    onClick={agregarNumero}
                    variant="outlined"
                    >Agregar el numero 5 al final</Button>   
                {
                    //Recorre el arrays y se lo asigna a items, para luego imprimirlo
                    //El index es la posicion que tomara cada elemento  
                    numero.map((item, index) => {
                        return <p key ={index}>valor {item}  |  Index o key {index} </p>
                        
                    })
                }
            </div>
        </div>
     );
}
 
export default ListasYKeys;