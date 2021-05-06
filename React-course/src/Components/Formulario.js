import React, { useState } from "react";
import {
  makeStyles,
  Card,
  CardContent,
  TextField,
  Typography,
  Button,
  CardActions,
} from "@material-ui/core";
import axios from "axios";
//Codigo CSS
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: 200,
      minWidth: 275,
      maxWidth: 500,
    },
    maxWidth: 700,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

const Formulario = () => {
  const classes = useStyles();

  const [persona, setPersona] = useState({
    //Objeto
    nombre: "",
    apellido: "",
  });

  const createObject = (event) => {
    //Como es objeto se trata de esta manera
    event.preventDefault();
    setPersona({
      ...persona,
      [event.target.name]: event.target.value,
    });
    //console.log(persona)
  };
  const sendDatos = async (event) => {
    let formData = new FormData();
    formData.append("nombre", persona.nombre);
    formData.append("apellido", persona.apellido);
    axios({
      method: "POST",
      url: "http://127.0.0.1:8000/add25/",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    });
  };

  const enviarDatos = async (event) => {
    //Siempre se tiene que iniciar con este metodo
    event.preventDefault();
    sendDatos();
    alert("Dato almacenado")
    //return false;
  };

  return (
    <div align="center">
      <Card className={classes.root}>
        <form onSubmit={enviarDatos}>
          <CardContent>
            <Typography variant="body1" component="p" align="left">
              Informacion Personal
            </Typography>
            <TextField
              name="nombre"
              label="Ingresar nombre"
              color="primary"
              variant="outlined"
              onChange={createObject}
            />
            <TextField
              name="apellido"
              label="Ingresar apellido"
              color="primary"
              variant="outlined"
              onChange={createObject}
            />
          </CardContent>
          <CardActions>
            <Button
              color="primary"
              size="small"
              variant="outlined"
              type="submit"
            >
              Guardar
            </Button>
          </CardActions>
        </form>
      </Card>
      <div className={classes.root} align="left">
        <h1>Informacion ingresada</h1>
        <p>Nombre: {persona.nombre}</p>
        <p>Apellido: {persona.apellido}</p>
      </div>
    </div>
  );
};

export default Formulario;

