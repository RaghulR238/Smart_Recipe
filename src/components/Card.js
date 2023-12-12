import React from "react";
import { Card, CardContent, CardMedia, Grid, Typography, Button, Rating, Container } from '@mui/material';
import TimerIcon from '@mui/icons-material/Timer';
import Image from './img1.jpg';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Con = () => {
  return (
    <Container
      style={{
        backgroundColor:'black',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        overflow: 'hidden',  // Hide any overflow from the background
      }}
    >
      <Container
        sx={{
          py: 8,
          overflowY: 'auto',
          maxHeight: 'calc(100vh - 64px)',
          '::-webkit-scrollbar': {
            width: '12px',
          },
          '::-webkit-scrollbar-track': {
            background: 'transparent',
          },
          '::-webkit-scrollbar-thumb': {
            background: '#888',
            borderRadius: '6px',
          },
        }}
      >
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={30} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="div"
                  sx={{
                    // 16:9
                    pt: '56.25%',
                  }}
                  image={Image}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant='h5' component="h2">
                    Chicken Wings
                  </Typography>
                  <Typography>
                    sfkgnjis sgisrgw gbyu hbguie bfuy uybs
                  </Typography>
                  <Rating name="half-rating-read" defaultValue={2} size="small" precision={0.5} readOnly />
                  <Button variant="" startIcon={<TimerIcon />}>20min</Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
};

export default Con;





// overflowY: 'auto' and maxHeight: 'calc(100vh - 64px)' are applied to the Container that wraps the Grid. This allows the cards to be scrollable within the specified container height.
// maxHeight is set to 'calc(100vh - 64px)' to ensure that the cards don't overflow the viewport height, and 64px is an estimate for the typical height of the app bar.