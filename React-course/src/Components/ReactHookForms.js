import React,{useState} from 'react';
import { useForm} from 'react-hook-form';
import { Button, TextField} from '@material-ui/core';

const ReactHookForms = () => {

    //Recibira una register, errores y una funcion
    //La funcion es llevada directamente al formulario y al onSubmit
    //const {register, errors, handleSubmit} = useForm();
    const { register,  formState:{errors}, handleSubmit } = useForm();
    //Otra cosa que cambio, es como se declaran los errores ahora se tiene que hacer de esta manera
    const [persona, setPersona] = useState({
        nombre:'',
        apellido:''
    });

    const login =(data, e)=>{
        console.log(data);
        //La variable e es un evento, tiene el mismo uso que lo visto anteriormente
        setPersona({...persona, data})
        console.log(data.nombre);
        console.log(persona); 
        e.target.reset();
    }

    //Antenerioment se declaraba con un ref el valor, ahora no se tiene que hacer de la manera como se ha hecho en el codigo
    //Desde la version 7.0 se comenzo a implementar esta forma o nomenclatura
    return ( 
        <div>
            <form onSubmit={handleSubmit(login)}>
                <h1>El formulario funciona, solo hay que darle estilo que se desea</h1>
                <TextField
                    {...register("nombre", { 
                        required: {
                            value:true, 
                            message:'Nombre obligatorio'
                            }
                        })}
                    name="nombre"
                    label="Nombre"
                />
                <span>{errors.nombre && errors.nombre.message}</span>
                <TextField 
                    {...register("apellido",{
                        required: {
                            value:true, 
                            message:'Apellido obligatorio'
                            }
                        })}
                    name="apellido"
                    label="Apellido"
                />
                <span>
                    {errors?.apellido?.message}
                </span>
                <Button type="submit">Aceptar</Button>
            </form>
        </div>

     );
}
 
export default ReactHookForms;