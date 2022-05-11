import './Description.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/Iconbutton';
import Snackbar from '@mui/material/Snackbar';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  HashRouter, Route, Routes, Link,
} from 'react-router-dom';

import CloseIcon from '@mui/icons-material/Close';

class Description extends React.Component {

    // Create state
  state = {

    // Get audio file in a variable
    open: false,
    audio: new Audio('./components/description/binaural_SoundBowlDemo.mp3'),
    buttonType: "contained",
    // Set initial state of song
    isPlaying: false,
    buttonLabel: "Binaural Demo",
    
  };
  handleButtonClick = () => {
    this.setState({open: true});
    this.playPause();
  };
  
  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({open: false});
  };
  action = (<React.Fragment> 
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>What am I hearing?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This is an example of synthesized singing bowl sounds that will be used in this project. In this sample, the same spatialization technique (referred to as ambisonics) is rendered as binaural audio, using a transform function that accounts for the shape of your head. As such, it gives a decent example of what these spatialized singing bowls might sound like in the real installation. It's best to use heaphones.
          </Typography>
        </AccordionDetails>
      </Accordion>
     <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={this.handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>);

  // Main function to handle both play and pause operations
  playPause = () => {

    // Get state of song
    let isPlaying = this.state.isPlaying;

    if (isPlaying) {
      // Pause the song if it is playing
      this.state.audio.pause();
      this.setState({ isPlaying: false });
      this.setState({open: false});
      this.setState({buttonType: "contained"});
      this.setState({buttonLabel: "Paused"});
      
    } else {

      // Play the song if it is paused
      this.state.audio.play();
      this.setState({ isPlaying: true });
      this.setState({open: true});
      this.setState({buttonType: "outlined"});
      this.setState({buttonLabel: "Playing"});
    }

    // Change the state of song
    
    //this.setState({ isPlaying: false });
  };
 
render() {
  
  return (
    <div className="App">
    <p> 
      <div className = "Description">
        <Typography variant="h6" align="center"> 
          <span className="Title">Centering</span> is a sound-art installation that leverages technology to create a meditative space for expression, reflection and belonging, by allowing participants to create immersive sound-fields together, using only their presence.
        </Typography>
      </div>
    </p>
    
    <p> 
      <div >
        <Typography variant="body"> 
          Our meditative sound art installation <span className= "Title">Centering</span> offers participants a novel way to create music through physical connection, an area of life continuously impacted by the evolving pandemic. Centering encourages people to playfully explore how to resonate with each other in an invisible sound field and make sonic offerings together, demonstrating how technology can make art more accessible while supporting human needs like expression, reflection, and belonging. The artwork is part of an ongoing Center for Computer Research in Music and Acoustics (CCRMA) student group initiative to bring computer music to the broader Stanford community and invite interdisciplinary co-creation in new sound environments. The physical installation consists of a speaker array for high resolution spatialized audio (Ambisonics) around a large reinforced plaster bowl placed in the center of the White Plaza Birdcage. We will use computer vision, an overhead camera, and a Linux embedded system (RaspberryPi) to track people’s interactions in the space, in real time. Passersby will see a large bowl and hear crystal singing bowls spatialized to their position as they approach the installation. The sounds will follow them as they explore the space, and dynamically change as they interact with other participants.
        </Typography>
      </div>
    </p>
    <Box textAlign="center">
    <Button onClick={this.playPause} variant={this.state.buttonType}>{this.state.buttonLabel}</Button>
    </Box>
      <Snackbar
        open={this.state.open}
        autoHideDuration={6000}
        message="Playing: Spatialized Sound Demo"
        handleClose={this.handleClose}
        action={this.action}
      />
      <p> 
      <div >
        <Typography variant="body"> 
          Through public performances and collaboration with TAPS, Centering will engage the broader Stanford community to experience the installation together. Performers of any practice may use this novel reactive sound environment to craft new music, dance, or other performance. We plan to collaborate with Stanford-affiliated dancers and reach out to other performance departments. We will publicize the installation through CCRMA, music department, dance and visual arts departments, graduate housing, graduate life office, and undergraduate life office listservs. Due to the Birdcage’s highly trafficked location, we expect curious Stanford community members to approach signage and engage with the installation. For performance events, we estimate  30-70 audience members based on CCRMA concert attendance. Since the installation is outdoors, COVID-19 risk is low, and can be lowered with voluntary masking.
        </Typography>
      </div>
    </p>
    <p> 
      <div >
        <Typography variant="body"> 
          From March to April 2023, we will design software components including sound generation, computer vision, and logfile output for this web music app. Simultaneously, we will physically construct our bowl centerpiece and signage to be placed around the birdcage. In the first two weeks of May 2023, we will assemble hardware such as speakers, speaker stands, and power equipment and begin testing our outdoors system at CCRMA. We will also create and disseminate promotional materials, both physical and electronic during this time. Over three days in mid-May (5/19-5/21), we will set up the installation on site at the birdcage. This will include placing the bowl centerpiece, calibrating the speakers, setting up the camera, running power to the electronics, and putting up signage. Beginning the week of May 22, we will open Centering to the public for two weeks. On Friday, May 26 and Friday, June 2, we will organize collaborative performances at the installation. We will take down the installation by Wednesday, June 7. (These dates are approximate. We will book the birdcage through Tressider Meeting Services.)
        </Typography>
      </div>
    </p>
    <p> 
      <div >
        <Typography variant="body"> 
          Our primary measure of success with <span className="Title">Centering</span> would be the repeated use and engagement with this installation by community members. Secondarily, we will organize performances and showcases of the work of other Stanford creatives in this space. We would consider this project to be successful if it brings the Stanford community together to play, socialize, express themselves in new ways, and present their own work. By making an interactive sound art installation with both location-specific and online-accessible experiences, we are highlighting technology’s role in novel artistic experiences and allowing visitors to reflect on their relationships with tech. <span className="Title">Centering</span> also demonstrates possibilities for social music without assuming music expertise, as well as alternative community building strategies through a collective “ownership” of public art. 
        </Typography>
      </div>
    </p>
    </div>
    
  );
  
}
}
export default Description;
