import './Portal.css';

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
import IosShareIcon from '@mui/icons-material/IosShare';
import {
  HashRouter, Route, Routes, Link,
} from 'react-router-dom';

import GameWeb from '../gameWeb/GameWeb';

class Gallery extends React.Component {
 
render() {
  
  return (
    <div className="Body"> 
      
      <p>
       <Box sx={{maxWidth:900}} alignItems="center" justifyContent="center" m='auto'>
       <GameWeb/>
      <Typography variant="h6" align="center">"Fullscreen" will not work on Safari. For a better experience on mobile, add this web app to your mobile device by pressing the share icon <IosShareIcon/>, and selecting "Add to Home Screen".
      This will allow this visualizer to run as native app, on your device.</Typography>
       </Box>
      </p>
    </div>
  );
  
}
}
export default Gallery;

