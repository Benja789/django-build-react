import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Tabs,
  Tab,
  Typography,
  Box, 
  Toolbar,
  makeStyles
} from '@material-ui/core';
import Formulario from './Components/Formulario';
import Contador from './Components/Contador';
import ListasYKeys from './Components/ListasYKeys';
import Logo from './Media/logo.png';
import FormularioAvanzado from './Components/FormularioAvanzado';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={'span'} variant={'body2'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  h1: {
    display: 'inline-block',
  },
}));

//Funcion a exportar
function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{background:'#2E3B55'}}> 
        <Toolbar className={classes.toolbar}>
          <img src = {Logo} alt="Logo React" height="50" width="50"/>
          <h1 className={classes.h1} align="center">Pagina Creada en REACT</h1>
        </Toolbar>

        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Listas y claves" {...a11yProps(0)} />
          <Tab label="Contador" {...a11yProps(1)} />
          <Tab label="Formulario" {...a11yProps(2)} />
          <Tab label="React Hook Form" {...a11yProps(3)}/>
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <ListasYKeys/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Contador/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Formulario/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <FormularioAvanzado/>
      </TabPanel>      
    </div>
  );
}
export default App;