import './States.css';
//import logo from 'IMG_0004.png';
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
import dong from './A_resonant_trimmed_2.mp3'

import InfoIcon from '@mui/icons-material/Info';
import PeopleIcon from '@mui/icons-material/People';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import CollectionsIcon from '@mui/icons-material/Collections';

import {
  HashRouter, Route, Routes, Link, Switch,
} from 'react-router-dom';

import Events from '../events/Events';
import About from '../about/About';
import Description from '../description/Description';
import Gallery from '../gallery/Gallery';


/**
 * Define States, a React componment of CS142 project #4 problem #2.  The model
 * data for this view (the state names) is available
 * at window.cs142models.statesModel().
 */
class States extends React.Component {
  


  handleButtonClick(buttonName, event) {
    this.setState({ buttonWasClicked: buttonName });
  }
    // Create state
  state = {

    // Get audio file in a variable
    audio: new Audio('./components/states/A_dong_trimmed.mp3'),

    // Set initial state of song
    isPlaying: false,
    buttonWasClicked: '',
  };

  // Main function to handle both play and pause operations
  playPause = () => {

    // Get state of song
    let isPlaying = this.state.isPlaying;

    if (isPlaying) {
      // Pause the song if it is playing
      this.state.audio.load();
      this.state.audio.volume = 0.5;
      
    } else {

      // Play the song if it is paused
      this.state.audio.volume = 0.5;
      this.state.audio.play();
    }

    // Change the state of song
    this.state.audio.play();
    this.setState({ isPlaying: true });
  };

  render() {
  
  return (
    <div className="App"> 
      
      <header className="App-header">
        
        <button onMouseEnter={this.playPause}> 
          <img src='./components/states/IMG_0004.png' className="App-logo" alt="logo"/>
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
      <BottomNavigation value={this.state.buttonWasClicked} onChange={(event, newValue) => this.handleButtonClick(newValue, event)}>
        <BottomNavigationAction label="Description" icon={<InfoIcon />} href='#description'> </BottomNavigationAction>
        <BottomNavigationAction label="Events" icon={<CalendarMonthIcon />} href='#events'/>
        <BottomNavigationAction label="About Us" icon={<PeopleIcon />} href='#about' />
        <BottomNavigationAction label="Gallery" icon={<CollectionsIcon />} href='#gallery' />
      </BottomNavigation>
        </Paper>   
    </Box>
<HashRouter>
    <Switch>
    <Route path="/description" component={Description} />
    <Route path="/events" component={Events} />
    <Route path="/about" component={About} />
    <Route path="/gallery" component={Gallery} />
    <Route path="/" component={Description} />
    </Switch>
</HashRouter>

      
    
    </div>
  );
  
}
}
export default States;
 //onClick={e => this.handleButtonClick(e.first_name + " " + e.last_name, e)}>{e.first_name + " " + e.last_name}