import React, {useState} from 'react';
import {
    Button,
    Card,
    CardContent,
    CardActions,
    makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(2),
            width: 200,
            minWidth: 275, 
            maxWidth:500,
        }, maxWidth:700,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
}));

const Contador = () => {
    //Logica de javascript
    //Creacion de consatnte
    const classes = useStyles();
    const [numero, setNumero] = useState(0);
    const [temperatura, setTemperatura] = useState(1);

    //Funcion en React
    const aumentar =()=>{
        setNumero(numero+1)
        setTemperatura(temperatura)
        console.log('Temperatura valor: ' + temperatura)
        console.log('Valor numero:' +numero)
    }

    //Lo que devolvemos a la vista    
    return (  
        <div align="center">
            <Card className={classes.root} align="left">
                <CardContent>
                    <h3>Componente creado en REACT</h3>
                    <p>Numero {numero}</p>                      
                    <p>Temperatura: {temperatura}, {temperatura > 20 ? 'Calor': 'Frio'}</p>
                </CardContent>
                <CardActions>
                    <Button onClick ={aumentar}>Aumentar el contador para numero</Button>
                </CardActions>
            </Card>
        </div>
    );
}
 
export default Contador;