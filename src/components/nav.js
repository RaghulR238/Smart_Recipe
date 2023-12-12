import { AppBar, Button, FormControl, InputLabel, MenuItem, Select, Toolbar, Typography, experimentalStyled, styled } from '@mui/material';
import React from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import PublishIcon from '@mui/icons-material/Publish';
import { Box } from '@mui/system';
const StyledToolBar=styled(Toolbar)(
    {
        display:'flex',
        justifyContent:'space-between',
        margin:'10px',
        padding:'5px'
    }
)
const ButtonStyle=styled(Button)(
    {
        padding:'20px',
        backgroundColor:'blue',
        width:'100px',
        margin:'15px'
    }
)
const ButtonStyle2=styled(Button)(
    {
        padding:'20px',
        color:'white',
        width:'500px',
        margin:'15px'
    }
)
const Navbar=()=>{
    return(
        <AppBar position='sticky'>
            <StyledToolBar>
                <Typography variant='h4'> Smart Recipies
                </Typography>
                

        <FormControl fullWidth sx={{ m: 1,  minWidth: 120 }}>
                <InputLabel id="demo-simple-select-label">Recipies</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Age"
                // onChange={handleChange}
                >               
                <MenuItem value={10}>Chicken</MenuItem>
                <MenuItem value={20}>Mutton</MenuItem>
                <MenuItem value={30}>Fish</MenuItem>
                </Select>
        </FormControl>
        <FormControl fullWidth sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-label">Quick & Easy</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Age"
                // onChange={handleChange}
                >               
                <MenuItem value={10}>Quick Meals</MenuItem>
                <MenuItem value={20}>Fast BreakFast</MenuItem>
                <MenuItem value={30}>5min Dinner</MenuItem>
                </Select>
        </FormControl>
        <FormControl fullWidth sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-label">Food Style</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Age"
                // onChange={handleChange}
                >               
                <MenuItem value={10}>Asian</MenuItem>
                <MenuItem value={20}>Chinese</MenuItem>
                <MenuItem value={30}>Western</MenuItem>
                </Select>
        </FormControl>


                <Box sx={{display:'flex', alignItems:'center',gap:'10px'}}>
                <ButtonStyle variant='contained'>FILTER</ButtonStyle>
                <ButtonStyle variant='contained'>LOG IN</ButtonStyle>
                {/* <Button>hgvgh</Button> */}
                <PublishIcon/>
                <SearchIcon/>
                </Box>
            </StyledToolBar>
        </AppBar>
    );
}

export default Navbar;