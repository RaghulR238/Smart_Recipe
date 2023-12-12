import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from './img1.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box } from '@mui/system';
import CarouselCaption from 'react-bootstrap/esm/CarouselCaption';

function Rightside() {
  return (  
    <Carousel data-bs-theme="dark" style={{  position: "absolute",left:'0px', margin:'10px' }}>
      <Carousel.Item>
        <img style={{ width: "100%", height: "auto", borderRadius: "20px" }}
          src={Image}
          alt="First slide"
        />
      <CarouselCaption>WESTERN</CarouselCaption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ width: "100%", height: "auto", borderRadius: "20px" }}
          src={Image}
          alt="Second slide"
        />
        <CarouselCaption >Chinese</CarouselCaption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ width: "100%", height: "auto", borderRadius: "20px" }}
          src={Image}
          alt="Third slide"
        />
        <CarouselCaption >Indian</CarouselCaption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Rightside;