import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { CardContent, Container, Grid, Slider} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { Stack, styled } from '@mui/system';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import Box from '@mui/material/Box';
import Content from './components/content';
import Rightside from './components/rightcontent';
import Navbar from './components/nav';
import SliderComponent from './components/rightcontent';
import SwipeableTextMobileStepper from './components/rightcontent';
import R1 from './components/Right';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card } from 'react-bootstrap';
import ReactCardSlider from 'react-card-slider-component';
// a slide object contains the image link, title and function/click event for when a user clicks on a card

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Footer from './components/footer';
function App() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
  return (
    <>
    
    <Navbar/>
   
    <Stack direction='row'   >
      <R1/>
      <Content />
    </Stack>
    <Box sx={{margin:"80px"}}>
    <Typography variant="h3" sx={{ fontFamily: '"Brush Script MT", cursive',textAlign:'left' ,color:'red'}}>
          HOT DEALS
        </Typography>
        <Carousel responsive={responsive}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</Carousel>
    </Box>
    <Footer/>
    </>
  );
};

export default App;