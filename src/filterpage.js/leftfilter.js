import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Drawer from '@mui/material/Drawer';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
import { Stack, color } from '@mui/system';
import {
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextField,
  FormControlLabel,
  Radio,
  RadioGroup,
  Box,
  Checkbox,
  AppBar,
  Typography,
  Toolbar,
  InputBase,
  Container,
  ButtonBase,
} from '@mui/material';
import { Carousel, CarouselCaption, FormLabel } from 'react-bootstrap';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import styled from '@emotion/styled';
import Image from './img1.jpg';
import Image2 from './Filter2.jpg';

const StyledToolBar = styled(Toolbar)({
  margin: '10px',
  padding: '5px',
  fontSize: '50px',
  alignItems: 'center',
});

const count=[1,2,3,4,5,6,7,8];
export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: true,
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
        <HighlightOffRoundedIcon onClick={toggleDrawer(false)} sx={{ fontSize: '55px' }} />
        <Stack sx={{ alignItems: 'center', padding: '20px' }}>
          <OutdoorGrillIcon />
          <TextField
            label="Cooking Time"
            sx={{ backgroundColor: 'white' }}
            placeholder="Enter user name"
            fullWidth
          ></TextField>
          <FormControl fullWidth sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-label">Ratings</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select">
              <MenuItem value={10}>5</MenuItem>
              <MenuItem value={20}>4+</MenuItem>
              <MenuItem value={30}>3+</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-label">Difficulty</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select">
              <MenuItem value={10}>Hard</MenuItem>
              <MenuItem value={20}>Medium</MenuItem>
              <MenuItem value={30}>Easy</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
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
          />
          <Button variant="outlined">Submit</Button>
        </Stack>
      </Drawer>
      <AppBar position="sticky">
        <StyledToolBar>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
            Find a Recipe
          </Typography>
        </StyledToolBar>
      </AppBar>


      <Stack direction="row">
        <Box flex={2.7} backgroundColor="black" sx={{ margin: 0, padding: 0 }}>
        <Container sx={{ position: 'relative', padding: '0', margin: '0', height: '90vh' }}>
      <Carousel
        style={{
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          cursor: 'pointer',
        }}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Image}
            alt="First slide"
            style={{ objectFit: 'cover', height: '100%' }}
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Image}
            alt="First slide"
            style={{ objectFit: 'cover', height: '100%' }}
          />
          
        </Carousel.Item><Carousel.Item>
          <img
            className="d-block w-100"
            src={Image}
            alt="First slide"
            style={{ objectFit: 'cover', height: '100%' }}
          />
         
        </Carousel.Item>
      </Carousel>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        position="absolute"
        top="30%"
        left="35%"
        transform="translate(-50%, -50%)"
        bgcolor="rgba(255, 255, 255, 0.8)"
        borderRadius="8px"
        p={3}
        boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
        
      >
        <Typography variant="h4" sx={{ marginBottom: '1rem' }}>
          Search Your Favorite
        </Typography>
        <InputBase
          placeholder="Enter your search"
          sx={{
            backgroundColor: 'white',
            padding: '0.5rem',
            borderRadius: '5px',
            width: '400px',
            
          }}
          startAdornment={<SearchIcon />}
        />
        <Button variant="contained" sx={{ marginTop: '1rem' }}>
          Search
        </Button>
      </Stack>
    </Container>
        </Box>


        <Box
      flex={1}
      sx={{
        padding: '15px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundImage: `url(${Image2})`,
        // backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Adjust the alpha value for transparency
        color: 'black', // Set the text color to contrast with the background
      }}
    >
      <Stack  
  
        transform="translate(-50%, -50%)"
        bgcolor="rgba(255, 255, 255, 0.6)"
        borderRadius="8px"
        p={3}
        >
      <Typography variant='h3'>Filter by Ingredient Available</Typography>
      <Typography variant='h4'>Enter the Ingredient:</Typography>
      {count.map((c) => (
        <TextField key={c} fullWidth label={`Ingredient${c}`} id={`Ingredient${c}`} />
      ))}
      <Button>Find</Button>
      </Stack>
    </Box>



      </Stack>
    </div>
  );
}
