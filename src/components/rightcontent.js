import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from './img1.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box } from '@mui/system';
import CarouselCaption from 'react-bootstrap/esm/CarouselCaption';
import I1 from './i1.jpg';
import I2 from './i2.jpg';
import I3 from './i3.jpg';
function Rightside() {
  return (  
    <Carousel data-bs-theme="dark" style={{  position: "absolute",left:'0px', margin:'10px', overflow: 'hidden' }}>
      <Carousel.Item>
        <img style={{ width: "100%", height: "auto", borderRadius: "20px" }}
          src={I1}
          alt="First slide"
        />
      <CarouselCaption>WESTERN</CarouselCaption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ width: "100%", height: "auto", borderRadius: "20px" }}
          src={I2}
          alt="Second slide"
        />
        <CarouselCaption >Chinese</CarouselCaption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ width: "100%", height: "auto", borderRadius: "20px" }}
          src={I3}
          alt="Third slide"
        />
        <CarouselCaption >Indian</CarouselCaption>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default Rightside;