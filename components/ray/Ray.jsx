import './Ray.css';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import ExpandMore from '../details/ExpandMore';
import {
  HashRouter, Route, Routes, Link,
} from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import CloseIcon from '@mui/icons-material/Close';

class About extends React.Component {

state = {
    expanded1: false,
    expanded2: false,
    expanded3: false,
    expanded4: false,
    expanded5: false,
    expanded6: false,
    expanded7: false,
    expanded8: false,
    expanded9: false,
};
  
handleExpandClick1 = () => {   
  this.setState(prevState => ({expanded1: !prevState.expanded1}));  
};
handleExpandClick2 = () => {    
  this.setState(prevState => ({expanded2: !prevState.expanded2})); 
};
handleExpandClick3 = () => {    
  this.setState(prevState => ({expanded3: !prevState.expanded3})); 
};
  
componentDidMount(){
          const section = document.querySelector( '#Bio' );
            section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
}

domes = (
    <React.Fragment> 
      <ImageList
                  sx={{ maxWidth: 500, margin: 0, padding:0 }}
                  variant="quilted"
                  cols={2}
                  rowHeight={100}
                >
                    <ImageListItem sx={{ maxWidth: 500}} cols={2}>
                      <img
                        src='./components/ray/domes-together.jpg'
                        alt='domes together'
                        loading="lazy"
                      />
                    </ImageListItem>
                  <ImageListItem >
                      <img
                        src='./components/ray/dome-1.jpg'
                        alt='dome 1'
                        loading="lazy"
                      />
                    </ImageListItem>
                  <ImageListItem >
                      <img
                        src='./components/ray/dome-2.jpg'
                        alt='dome 2'
                        loading="lazy"
                      />
                    </ImageListItem>
                  
                </ImageList>
        
    </React.Fragment>);
 
render() {
  
  return (
    <div>
  <div className="Body">
    <Box sx={{maxWidth:900}} alignItems="center" justifyContent="center" m='auto'>
      <Typography variant="h5" align="center" id="Bio"> 
            Biography
      </Typography>
    <p> 
      <Typography variant="body2"> 
        Ray Gifford (he/him) is a mulimedia artist and technologist from South Carolina. He is pursuing his Master's in 
        Music, Science, and Technology at Stanford University. His work takes the form of interactive audiovisual apps and multimedia 
        installation art. His works leverage emerging technologies, including computer vision, sound spatialization, and multisensor integration,
        for reactive sound synthesis across different mediums. Prior to Stanford, he received a Bachelor's in 
        Biochemistry and Molecular Biology, with a minor in Neuroscience, and leadership distinction in research, from the 
        University of South Carolina.
      </Typography>
    </p>
       <Typography variant="h5" align="center" id="Bio"> 
            Selected Works
      </Typography>
    </Box>
  </div>
    
      <p>
      <Box sx={{ flexGrow: 1, maxWidth: 1150 }} display="flex" alignItems="center" justifyContent="center" m="auto">      
        <Grid container spacing={2} display="flex" alignItems="center" justifyContent="center" >
          <Grid item xs display="flex" alignItems="center" justifyContent="center" m="auto">
            <Card sx={{ maxWidth: 370, minWidth: 370}}>
              <CardMedia
                component="img"
                height="200"
                image="./components/details/SimplifiedSetup.png"
                alt="Close"
              />
            <Stack direction="row" justifyContent="space-between">
              <CardContent sx={{ display: 'inline' }}>
                <Typography variant="body2" color="text.secondary" sx={{ display: 'inline' }}>
                  "Close Enough"
                </Typography>
              </CardContent>
              <CardActions disableSpacing sx={{ display: 'inline' }}>
                <ExpandMore
                  expand={this.state.expanded1}
                  onClick={this.handleExpandClick1}
                  aria-expanded={this.state.expanded1}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
            </Stack>
              
              <Collapse in={this.state.expanded1} timeout="auto" unmountOnExit>
                <CardContent>
                  
                  <Typography paragraph>
                    <span className="Title">Close Enough</span> is a 6 ft diameter space, that shares discomfort in getting close to others, using spatialized audio.
                    When close enough to touch, it suggests something else.
                  </Typography>
                  <Button variant="contained" href="https://youtu.be/-brs0KA_rnY" align="center">Video</Button>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
          <Grid item xs display="flex" alignItems="center" justifyContent="center" m="auto">
            <Card sx={{ maxWidth: 370, minWidth: 370}}>
              <CardMedia
                component="img"
                height="200"
                image="./components/ray/gods.PNG"
                alt="designers are gods"
              />
            <Stack direction="row" justifyContent="space-between">
              <CardContent sx={{ display: 'inline' }}>
                <Typography variant="body2" color="text.secondary" sx={{ display: 'inline' }}>
                  "Designers are gods"
                </Typography>     
              </CardContent>
              <CardActions disableSpacing sx={{ display: 'inline' }}>
                <ExpandMore
                  expand={this.state.expanded2}
                  onClick={this.handleExpandClick2}
                  aria-expanded={this.state.expanded2}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
            </Stack>
              <Collapse in={this.state.expanded2} timeout="auto" unmountOnExit>
                <CardContent>
                  
                  <Typography paragraph>
                    <span className="Title">Designers are gods</span> is an audiovisual native app for MacOS, that allows users to create sonic 
                    celestial bodies. The user must face what that they create. The more greedy they are, the more chaotic and disturbing the sound field that is generated.
                  </Typography>
                   <Button variant="contained" href="https://youtu.be/DTaQ5XgtuKM" align="center">Video</Button>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
          <Grid item xs display="flex" alignItems="center" justifyContent="center" m="auto">
            <Card sx={{ maxWidth: 370, minWidth: 370}}>
              <CardContent sx={{ margin: 0, padding:0 }}>
                {this.domes}
              </CardContent>
                
            <Stack direction="row" justifyContent="space-between">
              <CardContent sx={{ display: 'inline' }}>
                <Typography variant="body2" color="text.secondary" sx={{ display: 'inline' }}>
                  "Cultural Captials"
                </Typography>
              </CardContent>
              <CardActions disableSpacing sx={{ display: 'inline' }}>
                <ExpandMore
                  expand={this.state.expanded3}
                  onClick={this.handleExpandClick3}
                  aria-expanded={this.state.expanded3}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
            </Stack>
              <Collapse in={this.state.expanded3} timeout="auto" unmountOnExit>
                <CardContent>
                  
                  <Typography paragraph>
                    <span className ="Title">Cultural Capitals</span> shares the experience of a cultural collision. Two domes modeled after a mosque in Mosul Iraq, and christian 
                    church in South Carolina, seemingly destructive in nature, face one another with... completely unaware of the other's cultural interior.
                  </Typography>
                  <Button variant="contained" href="https://raymondgifford.com/collaborative-projects/" align="center">Project Page</Button>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        </Grid>
      </Box>
      </p>
    
  </div> 
 
  );
  
}
}
export default About;
