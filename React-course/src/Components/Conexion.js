import React from 'react';
import {
    Card,
    CardContent,
    Typography
} from '@material-ui/core';
/*
{
    data.map(informacion =>(
        <div id={informacion.id}>
            <Card>
                <CardContent>
                    <Typography variant="h6" gutterBottom>Nombre: {informacion.nombre}</Typography>
                    <Typography variant="h6" gutterBottom>Apelllido: {informacion.apellido}</Typography>
                </CardContent>
            </Card>
        </div>
    ))
    }
 */
const Conexion =(nombre, apellido,id)=>{
    return(
        <div id={id}>
             <Card>
                 <CardContent>
                    <Typography variant="h6">Nombre: {nombre}</Typography>
                    <Typography variant="h6">Apelllido: {apellido}</Typography>
                 </CardContent>
             </Card>
        </div>
    );
}
export default Conexion;