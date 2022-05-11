"use strict";
import logo from './IMG_0004.PNG';
import './App.css';
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



function Description (){
  
  return (
    <div className="App"> 
    <Typography variant="h6" font-style="italic" font-align="center"> 
      Centering is a sound-art installation that leverages technology to create a meditative space for expression, reflection and belonging, by allowing participants to create immersive sound-fields together, using only their presence.
    </Typography>
    
      
    
    </div>
  );
  
}



export default Description;
