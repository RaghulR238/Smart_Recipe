import { Box } from '@mui/system'
import React from 'react'

import { Slider, TextField, Tooltip, styled ,Typography, FormControl, RadioGroup, FormLabel, FormControlLabel, Radio, Button} from '@mui/material';

const TextFieldStyled= styled(TextField)({
   margin:'10px',
    padding: '10px',
    fontSize: '50px',
    width:'100%'
  });

  const ValueLabelComponent = (props) => {
    const { children, open, value } = props;
  
    return (
      <Tooltip open={open} enterTouchDelay={0} placement="top" title={<Typography>{value}</Typography>}>
        {children}
      </Tooltip>
    );
  };
  
  const marks = [
    { value: -0.00000005, label: 'poor' },
    // Add more marks as needed
    // { value: anotherValue, label: 'Another Title' },
    // ...
    { value: 0.0000003, label: 'Excellent' },
  ];



export default function Up_right() {
  return (
    <Box flex={1} sx={{width:"100%",backgroundColor:"", padding:"20px", margin:"20px"}} >
        <TextFieldStyled
          id="outlined-multiline-static"
          label="Cooking Equipment"
          multiline
          sx={{marginTop:"-4px"}}
          rows={2}
        />
      <TextFieldStyled
          required
          id="outlined-required"
          label="Timing"
     
        />
        <TextFieldStyled
        
          id="outlined"
          label="Complexity"
     
        />
        
        <Typography variant='h5' marginLeft="20px">Hygienic level</Typography>
       <Slider
      aria-label="Small steps"
      defaultValue={-0.00000005}
      step={0.00000006}
    marks={marks}
      min={-0.00000005}
      max={0.0000003}
     
      ValueLabelComponent={ValueLabelComponent}
    sx={{width:'50%', marginLeft:"30px"}}
    />
    <br></br>
     <FormControl sx={{marginLeft:"20px", marginTop:"20px"}}>
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
          <Button variant="contained" color="primary" sx={{padding:'20px', marginTop:"50px"}}  fullWidth>
        Upload
      </Button>
    </Box>
  )
}
