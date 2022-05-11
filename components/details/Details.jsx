import './Details.css';
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
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import {
  HashRouter, Route, Routes, Link,
} from 'react-router-dom';

import CloseIcon from '@mui/icons-material/Close';

class Details extends React.Component {
 
render() {
  
  return (
    <div className="Body"> 
      
      <p> 
        <div className = "Description">
          <Typography variant="h5" align="center"> 
             Detailed Software Desciption
          </Typography>
        </div>
      </p>
      
      <Divider/>
      
      <p> 
        <div className = "Description">
          <Typography variant="Body"> 
             As mentioned in the brief project description, all computation for <span className="Title">Centering</span> will take place on a small Linux embedded system (RaspberryPi 4+). We found that while its compact, its limited CPU didn't allow for realtime interactions. However, with the addition of a Tensorflow Processing Unit (TPU) accelerator, we were able to achieve an object detection model inference speed below the frame rate of the camera, and implement the algorithm detailed below, to provide realtime interaction with the space.  
          </Typography>
        </div>
      </p>
      <Divider/>
      <p> 
        <div className = "Description">
          <Typography variant="h6" align="center"> 
               A series of pictures to help conceptualize the object dection and tracking algorithm:
          </Typography>
        </div>
      </p>
      
      <Box sx={{ flexGrow: 1 }} display="flex" alignItems="center" justifyContent="center" m="auto">      
        <Grid container spacing={2} display="flex" alignItems="center" justifyContent="center">
          <Grid item xs display="flex" alignItems="center" justifyContent="center" m="auto">
            <Card sx={{ maxWidth: 350, minWidth: 200}}>
              <CardMedia
                component="img"
                height="194"
                image="./components/details/SimplifiedSetup.png"
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  1. This is a simplified model of the setup, to help detail the tracking algorithm.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs display="flex" alignItems="center" justifyContent="center" m="auto">
            <Card sx={{ maxWidth: 350, minWidth: 200}}>
              <CardMedia
                component="img"
                height="194"
                image="./components/details/TopDownView.png"
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  2. From the top-down camera view, we have two individuals exploring the space.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs display="flex" alignItems="center" justifyContent="center" m="auto">
            <Card sx={{ maxWidth: 350, minWidth: 200}}>
              <CardMedia
                component="img"
                height="194"
                image="./components/details/DetectionModel.png"
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  3. Each frame, a pretrained tensorflow-based object detection mobilenet will be run to detect the presence of people.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs display="flex" alignItems="center" justifyContent="center" m="auto">
            <Card sx={{ maxWidth: 350, minWidth: 200}}>
              <CardMedia
                component="img"
                height="194"
                image="./components/details/ComputeCentroids.png"
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  4. From the boxes bounding these objects, the centroids will be computed.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs display="flex" alignItems="center" justifyContent="center" m="auto">
            <Card sx={{ maxWidth: 350, minWidth: 200}}>
              <CardMedia
                component="img"
                height="194"
                image="./components/details/UniqueLables.png"
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  5. The algorithm will next assign unique labeles to each individual in the space.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs display="flex" alignItems="center" justifyContent="center" m="auto">
            <Card sx={{ maxWidth: 350, minWidth: 200}}>
              <CardMedia
                component="img"
                height="194"
                image="./components/details/NextFrame.png"
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  6. The algorithm grabs the next frame from the frame buffer. Here, a new individual has joined.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs display="flex" alignItems="center" justifyContent="center" m="auto">
            <Card sx={{ maxWidth: 350, minWidth: 200}}>
              <CardMedia
                component="img"
                height="194"
                image="./components/details/KNN.png"
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  7. The algorithm computes euclidean distance between all centroids, and passes on unique labels to centroids with the smallest distance between frames. A new individual gets its own unique lable. Similarly, when an individual leaves, their lable is pruned.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs display="flex" alignItems="center" justifyContent="center" m="auto">
            <Card sx={{ maxWidth: 350, minWidth: 200}}>
              <CardMedia
                component="img"
                height="194"
                image="./components/details/ComputeCoordinates.png"
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  8. Along with euclidean distance between centroids, polar coordinates are computed and sent via User Datagram Protocol (UDP) messages to PureData, where the sound is synthesized.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs display="flex" alignItems="center" justifyContent="center" m="auto">
            <Card sx={{ maxWidth: 350, minWidth: 200}}>
              <CardMedia
                component="img"
                height="194"
                image="./components/details/SpatializeAudio.png"
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  9. Once in PureData, sounds will be synthesized and Ambisonically encoded to produce sound sources, as if emanating from the individuals position, and decoded to the specific speaker array.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <p>
        <Divider/>
        
        <div className = "Description">
          <Typography variant="h6" align="center"> 
               As the project progresses, more detailed scripts will be uploaded to a public Github page, and linked here.
          </Typography>
        </div> 
      </p> 
    </div>

    
  );
  
}
}
export default Details;

