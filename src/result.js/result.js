import { AppBar, Box, Button, Card, CardContent, CardMedia, Checkbox, Drawer, FormControl, FormControlLabel, FormLabel, Grid, InputBase, InputLabel, MenuItem, Radio, RadioGroup, Rating, Select, Stack, TextField, Toolbar, Typography, styled } from '@mui/material';
import * as React from 'react';
import { useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import TuneSharpIcon from '@mui/icons-material/TuneSharp';
import TimerSharpIcon from '@mui/icons-material/TimerSharp';
import Image from './img1.jpg';
import { TimerSharp } from '@mui/icons-material';
import { HighlightOffRounded, OutdoorGrill } from '@mui/icons-material';
import  { useState } from 'react'
import axios from 'axios';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
import './card2.css'

const StyledToolBar = styled(Toolbar)({
  margin: '10px',
  padding: '5px',
  fontSize: '50px',
  alignItems: 'center',
});




let ar=[];
export default function Result() {
  const [title,setTitle]=useState([]);
  const[rating,setRating]=useState(0);
 

  const apiKey1='b9277005ebf74f12b62510043e2869a5';
const apiKey='4652d41224d74dbcb1ea92606a4e100f';
//const apiKey3='b3a6549e3e4142e6a9a8219944003f85';

  const [state, setState] = React.useState({
    left: false,
  });
  
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    
    setState({ ...state, left: open });
  };

  const[inputvalue,setinputvalue]=useState('');
  const handleChange=(event)=>{
    setinputvalue(event.target.value);
  }
  const handleKeyPress = (event) => {
    if(event.key==='Enter')
    {
    //console.log(inputvalue);
    fetchData();
    }
  }

  

const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${inputvalue}&addRecipeInformation=true&apiKey=${apiKey}`);
  
        ar=response.data;
        console.log(response.data);
        console.log(response.data);
        
        setTitle(response.data.results);
      } catch (error) {
        // Handle errors
        console.error('Error fetching data:', error);
      }
    };
function set(s)
{
  console.log(typeof(s)+" "+s);
if(s<25)
{
  return 1;
}
else if(s<50)
{
  return 2;
}
else if(s<75)
{
  return 3;
}
else if(s<80)
{
  return 3;
}
else 
{
  console.log("wetaewr");
  return 5;
}
}

return (
  <div>
      <Drawer anchor="left" open={state.left} onClose={toggleDrawer(false)}>
        <HighlightOffRoundedIcon onClick={toggleDrawer(false)} sx={{ fontSize: '55px' , margin:'20px 0px 20px 0px'}} />
        <Stack sx={{ alignItems: 'center', padding: '10px',border: '9px solid black' ,backgroundColor:'tomato'}}>
          <OutdoorGrillIcon />
          <Typography variant="h2" component="div" sx={{ fontFamily: '"Brush Script MT", cursive',flexGrow: 1, textAlign: 'center' }}>
            Filter
          </Typography>
          <TextField
            label="Cooking Time"
            sx={{ color:'white', margin:'20px 0px 20px 0px'}}
            placeholder="Enter user name"
            fullWidth
          ></TextField>
          <FormControl fullWidth sx={{color:'black', m: 1, minWidth: 120, margin:'20px 0px 20px 0px' }}>
            <InputLabel id="demo-simple-select-label">Ratings</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select">
              <MenuItem value={10}>5</MenuItem>
              <MenuItem value={20}>4+</MenuItem>
              <MenuItem value={30}>3+</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{color:'black', m: 1, minWidth: 120 , margin:'20px 0px 20px 0px'}}>
            <InputLabel id="demo-simple-select-label">Difficulty</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select">
              <MenuItem value={10}>Hard</MenuItem>
              <MenuItem value={20}>Medium</MenuItem>
              <MenuItem value={30}>Easy</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ color:'black',margin:'20px 0px 20px 0px'}}>
            <FormLabel id="demo-row-radio-buttons-group-label">Food Type</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="veg" control={<Radio />} label="veg" />
              <FormControlLabel value="non-veg" control={<Radio />} label="non-veg" />
            </RadioGroup>
          </FormControl>
          <FormControlLabel
            value="start"
            control={<Checkbox />}
            label="Pure Hygienic"
            labelPlacement="start"
            sx={{ color:'black',margin:'20px 0px 20px 0px'}}
          />
          <Button variant="outlined" sx={{backgroundColor:'black' ,color:'white', margin:'20px 0px 20px 0px', fontFamily:'"Brush Script MT", cursive',fontSize:'30px'}}>
            SUBMIT</Button>
        </Stack>
      </Drawer>

      <AppBar position="sticky" sx={{backgroundColor:'tomato'}}>
        <StyledToolBar>
          <Typography variant="h2" sx={{fontFamily: '"Brush Script MT", cursive', flexGrow: 1, textAlign: 'left' }}>
            Smart Recipe
          </Typography>
          <InputBase
            placeholder="Enter your search"
            value={inputvalue}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            sx={{
              backgroundColor: 'white',
              padding: '0.5rem',
              borderRadius: '5px',
              width: '800px',
              marginRight: '300px',
            }}
            startAdornment={<SearchIcon />}
            endAdornment={
              <Button sx={{ width: '50px' }} variant="contained" onClick={toggleDrawer(true)}>
                <TuneSharpIcon onClick={toggleDrawer(true)} />
              </Button>
            }
          />
        </StyledToolBar>
      </AppBar>

      <Stack flex="row" sx={{ padding: '20px',backgroundColor:'white'}}>
        <Grid container spacing={4}>
          {title.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <div class="card">
<div class="card__content">
              <Card sx={{height: '550px',width:'433px',borderRadius: '15px', display: 'flex', flexDirection: 'column'}}>
              <CardMedia
                  component="div"
                  sx={{
                    marginLeft:"0px",
                    marginTop:"0px",
                   width:'300px',
                   height:"300px"
                  }}
                ><img src={card.image} alt={title} style={{ width: '500px', height: '300px' }} /></CardMedia>
                <CardContent sx={{ flexGrow: '1' }}>
                <Typography variant="h3" component="div" sx={{ fontFamily: '"Brush Script MT", cursive', textAlign: 'left' }}>
            {card.title}
          </Typography>
                  <Typography sx={{ paddingBottom: '10px', paddingTop: '10px' }}>
                    CUISINES:{card.cuisines[0]}
                  </Typography>
                  <Typography sx={{ paddingBottom: '10px', paddingTop: '10px' }}>
                    PRICE PER SERVING:{card.pricePerServing}
                  </Typography>
                  <Typography sx={{ paddingBottom: '10px', paddingTop: '10px' }}>
                    HEALTH SCORE:{card.healthScore}
                  </Typography>
                  <Rating name="half-rating-read" defaultValue={set(card.spoonacularScore)} size="large"  readOnly />
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between', // Align items with space between
                      marginTop: '-28px',
                      textAlign: 'right', // Align text to the right
                    }}
                  >
                    <TimerSharpIcon sx={{ marginLeft: 'auto' }} />
                    <Typography variant="body2">{card.readyInMinutes}min</Typography>
                  </Box>
                </CardContent>
              </Card>
            </div>
            </div>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </div>
  );
}
