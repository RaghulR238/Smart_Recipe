import React from "react";
import { Card, CardContent, CardMedia, Grid, Typography, Button, Rating, Container, Box } from '@mui/material';
import TimerIcon from '@mui/icons-material/Timer';
import Image from './img1.jpg';
import './card.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { borderRadius } from "@mui/system";
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Con = () => {
  return (
    
      <Box
        sx={{height:"610px", overflowY:'scroll', padding:'50px' }}
      >
        <Typography variant="h3" sx={{ fontFamily: '"Brush Script MT", cursive',textAlign:'center' ,color:'red', marginBottom:'10px'}}>
          LATEST
        </Typography>
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={30} sm={6} md={4}>
              <div class="cardc">
<div class="card__contentc">


              <Card sx={{ height:'385px' ,width:'202px', display: 'flex', flexDirection: 'column',borderRadius:'15px' }}>
              <CardMedia
                  component="div"
                  sx={{
                   
                   width:'210px',
                   height:"200px"
                  }}
                ><img src={Image} style={{ width:'202px',height:'202px' }} /></CardMedia>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant='h5' component="h2">
                    Chicken Wings
                  </Typography>
                  <Typography>
                    sfkgnjis sgisrgw gbyu hbguie bfuy uybs
                  </Typography>
                  <Rating name="half-rating-read" defaultValue={2} size="large" precision={0.5} readOnly />
                  <Button variant="" startIcon={<TimerIcon />}>20min</Button>
                </CardContent>
              </Card>
              </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Box>
    
  );
};

export default Con;





// overflowY: 'auto' and maxHeight: 'calc(100vh - 64px)' are applied to the Container that wraps the Grid. This allows the cards to be scrollable within the specified container height.
// maxHeight is set to 'calc(100vh - 64px)' to ensure that the cards don't overflow the viewport height, and 64px is an estimate for the typical height of the app bar.