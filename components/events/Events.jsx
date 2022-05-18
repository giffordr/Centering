import './Events.css';

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
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
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import Tooltip from '@mui/material/Tooltip';
import ExpandMore from '../details/ExpandMore';
import {
  HashRouter, Route, Routes, Link, Switch,
} from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';

import DesignServicesIcon from '@mui/icons-material/DesignServices';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import ConstructionIcon from '@mui/icons-material/Construction';
import CameraOutdoorIcon from '@mui/icons-material/CameraOutdoor';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

class Events extends React.Component {
 
render() {
  
  return (
    <div className="Body">
    <Box sx={{maxWidth:900}} alignItems="center" justifyContent="center" m='auto'>
    <p>
    
        <Typography variant="h5" align="center">
            Project Timeline
        </Typography>
        <Divider/>
        
    </p>
        
      <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0', fontSize:'12px'}}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          March-April 2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <ArchitectureIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Design
          </Typography>
          <Typography>Design software components and bowl centerpiece</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0', fontSize:'12px' }}
          variant="body2"
          color="text.secondary"
        >
          May 2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <ConstructionIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Test
          </Typography>
          <Typography>Optomize during test build</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
          <TimelineOppositeContent
          sx={{ m: 'auto 0', fontSize:'12px' }}
          variant="body2"
          color="text.secondary"
        >
          May 19 - May 21
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <CameraOutdoorIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Install
          </Typography>
          <Typography>Install at Birdcage in White Plaza</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
          <TimelineOppositeContent
          sx={{ m: 'auto 0', fontSize:'12px' }}
          variant="body2"
          color="text.secondary"
        >
          May 22
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
            <ConnectWithoutContactIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Share
          </Typography>
          <Typography>Make available to public, and host concert series!</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    <p>
    
        <Typography variant="h5" align="center">
            Events
        </Typography>
        <Divider/>
        
    </p>
    <p>
        <Typography variant="body2">
            As the project progresses, event dates will be posted here. Community members can 
            keep track of project progress, and find performance information listed here.
        </Typography>
    </p>
    </Box>
    </div>
  );
  
}
}
export default Events;
