import { AppBar, Box, Button, Card, CardContent, CardMedia, Checkbox, Drawer, FormControl, FormControlLabel, FormLabel, Grid, InputBase, InputLabel, MenuItem, Radio, RadioGroup, Rating, Select, Stack, TextField, Toolbar, Typography, styled } from '@mui/material';
import * as React from 'react';

import SearchIcon from '@mui/icons-material/Search';
import TuneSharpIcon from '@mui/icons-material/TuneSharp';
import TimerSharpIcon from '@mui/icons-material/TimerSharp';
import Image from './img1.jpg';
import { TimerSharp } from '@mui/icons-material';
import { HighlightOffRounded, OutdoorGrill } from '@mui/icons-material';

const StyledToolBar = styled(Toolbar)({
  margin: '10px',
  padding: '5px',
  fontSize: '50px',
  alignItems: 'center',
});

const cards = Array.from({ length: 20 }, (_, i) => i + 1);

export default function Result() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, left: open });
  };

  return (
    <div>
      <Drawer anchor="left" open={state.left} onClose={toggleDrawer(false)}>
        <HighlightOffRounded onClick={toggleDrawer(false)} sx={{ fontSize: '55px', margin: '20px 0px 20px 0px' }} />
        <Stack sx={{ alignItems: 'center', padding: '20px', border: '9px solid black' }}>
          <OutdoorGrill />
          <TextField
            label="Cooking Time"
            sx={{ backgroundColor: 'white', margin: '20px 0px 20px 0px' }}
            placeholder="Enter user name"
            fullWidth
          />
          <FormControl fullWidth sx={{ m: 1, minWidth: 120, margin: '20px 0px 20px 0px' }}>
            <InputLabel id="demo-simple-select-label">Ratings</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select">
              <MenuItem value={10}>5</MenuItem>
              <MenuItem value={20}>4+</MenuItem>
              <MenuItem value={30}>3+</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ m: 1, minWidth: 120, margin: '20px 0px 20px 0px' }}>
            <InputLabel id="demo-simple-select-label">Difficulty</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select">
              <MenuItem value={10}>Hard</MenuItem>
              <MenuItem value={20}>Medium</MenuItem>
              <MenuItem value={30}>Easy</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ margin: '20px 0px 20px 0px' }}>
            <FormLabel id="demo-row-radio-buttons-group-label">Food Type</FormLabel>
            <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
              <FormControlLabel value="veg" control={<Radio />} label="veg" />
              <FormControlLabel value="non-veg" control={<Radio />} label="non-veg" />
            </RadioGroup>
          </FormControl>
          <FormControlLabel
            value="start"
            control={<Checkbox />}
            label="Pure Hygienic"
            labelPlacement="start"
            sx={{ margin: '20px 0px 20px 0px' }}
          />
          <Button variant="outlined" sx={{ margin: '20px 0px 20px 0px' }}>
            Submit
          </Button>
        </Stack>
      </Drawer>

      <AppBar position="sticky">
        <StyledToolBar>
          <Typography variant="h3" sx={{ flexGrow: 1, textAlign: 'left' }}>
            Smart Recipe
          </Typography>
          <InputBase
            placeholder="Enter your search"
            sx={{
              backgroundColor: 'white',
              padding: '0.5rem',
              borderRadius: '5px',
              width: '800px',
              marginRight: '300px',
            }}
            startAdornment={<SearchIcon />}
            endAdornment={
              <Button sx={{ width: '50px' }} variant="contained">
                <TuneSharpIcon onClick={toggleDrawer(true)} />
              </Button>
            }
          />
        </StyledToolBar>
      </AppBar>

      <Stack flex="row" sx={{ padding: '20px' }}>
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
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
                  <Typography gutterBottom variant="h5" component="h2">
                    Chicken Wings
                  </Typography>
                  <Typography sx={{ paddingBottom: '20px', paddingTop: '20px' }}>
                    sfkgnjis sgisrgw gbyu hbguie bfuy uybs
                  </Typography>
                  <Rating name="half-rating-read" defaultValue={5} size="large" precision={0.5} readOnly />
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between', // Align items with space between
                      marginTop: '20px',
                      textAlign: 'right', // Align text to the right
                    }}
                  >
                    <TimerSharpIcon sx={{ marginLeft: 'auto' }} />
                    <Typography variant="body2">20min</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </div>
  );
}
