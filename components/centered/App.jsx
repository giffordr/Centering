"use strict";
import logo from './IMG_0004.PNG';
import './App.css';
import Description from './Description';


import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import useSound from "use-sound";
import bowl from './A_resonant_trimmed_2.mp3';
import dong from './A_dong_trimmed.wav'
import InfoIcon from '@mui/icons-material/Info';
import PeopleIcon from '@mui/icons-material/People';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import CollectionsIcon from '@mui/icons-material/Collections';
import {
  HashRouter, Route, Routes, Link,
} from 'react-router-dom';



class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('window.cs142models.statesModel()', window.cs142models.statesModel());
  }



render() {  
  const [playDong, { stop }] = useSound(dong);
  
  const [value, setValue] = React.useState(0);
  
  return (
    <div className="App"> 
      
      <header className="App-header">
        
        <button onMouseEnter={() => playDong()} >
          <img src={logo} className="App-logo" alt="logo"/>
        </button>
       
        <a className = "Centering" >
          Centering
        </a>
  
      <Typography variant="h6" className = "subHeader"> 
        A place for creation, reflection, and connection
      </Typography>
      </header> 

      <Box sx={{ width: 1 }}>
        <Paper elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Description" icon={<InfoIcon />}><Description/></BottomNavigationAction>
        <BottomNavigationAction label="Events" icon={<CalendarMonthIcon />}/>
        <BottomNavigationAction label="About Us" icon={<PeopleIcon />} />
        <BottomNavigationAction label="Gallery" icon={<CollectionsIcon />} />
      </BottomNavigation>
        </Paper>   
    </Box>

      
    
    </div>
  );
  
}
}




export default App;
