import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {
    Button,
    TextField
} from '@material-ui/core';

const FormularioAvanzado = () => {
    
    const {register, formState:{errors}, handleSubmit} = useForm();
    const [entradas, setEntradas] = useState({
        nombre:'',
        apellido:''
    });

    const guardarInfo = (data, e) =>{
        console.log(data)
        setEntradas([...entradas, ...data]);
        //console.log(entradas)
    }

    return ( 
        <div>
            <h1>Este formulario combina el formulario normal y la libreria React Hook Form</h1>
            <form onSubmit={handleSubmit(guardarInfo)}>
                <TextField 
                    label="Nombre"
                    {...register("nombre",{
                        required:{
                            value:true,
                            message:"Campo obligatorio"
                        },
                        minLength:{
                            value: 5,
                            message: "Campo con minimo de 5 letras"
                        }
                    })}
                />
                <span>{errors?.nombre?.message}</span>
                <TextField
                    label="Apellido"
                    {...register("apellido",{
                        required:{
                            value: true,
                            message:"Campo obligatorio"
                        },
                        minLength:{
                            value: 5,
                            message: "Campo con minimo de 5 letras"
                        }
                    })}
                />
                <span>{errors?.apellido?.message}</span>
                <Button type="submit">Aceptar</Button>
            </form>
        </div>
     );
}
 
export default FormularioAvanzado;
