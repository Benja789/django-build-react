import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme)=>({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: 200,
      minWidth: 275, 
      maxWidth:500,
  }, maxWidth:700,
  margin:'3',
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

const Tarjeta =({persona})=> {
    const classes = useStyles();
    //const bull = <span className={classes.bullet}>•</span>;
  
    return (
      <div className={classes.root} >
        <Card className={classes.root} align="left">
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Correlativo de informacion: {persona.id}
            </Typography>
            <Typography variant="h5" component="h2">
              Nombre: {persona.frist_name}
            </Typography>
            <Typography variant="h5" component="h2">
              Apellido: {persona.last_name}
            </Typography>
            
          </CardContent>
        </Card>
      </div>
    );
}
 
export default Tarjeta;