import './About.css';

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
import {
  HashRouter, Route, Routes, Link,
} from 'react-router-dom';

class About extends React.Component {
 
render() {
  
  return (
    <div className="App"> 
      <Typography variant="h6">TODO: Add our personal webpages and Bios</Typography>
    </div>
  );
  
}
}
export default About;
