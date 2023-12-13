import { Box, Container } from '@mui/system'
import React from 'react'

import { Button, TextField, Typography, styled } from '@mui/material';

const TextFieldStyled= styled(TextField)({
   margin:'10px',
    padding: '6px',
    fontSize: '50px',
    width:'100%'
  });

  const ar=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
export default function Up_left() {
  return (
    <Box flex={1} sx={{width:"100%",backgroundColor:"", padding:"0px", margin:"20px"}} >
      <TextFieldStyled
          required
          id="outlined-required"
          label="Dish Name"
          
        />
        <Container >
        <Typography variant='h5' marginLeft="-7px">Upload Image</Typography>
      <TextField
        type="file"
        accept="image/*"
        fullWidth
        sx={{width:'100%'}}
      />
      <Button variant="contained" color="primary"  fullWidth>
        Upload
      </Button>
    </Container>
        <TextFieldStyled
          id="outlined-multiline-static"
          label="Recipe"
          multiline
          rows={6}
        />
        <Typography variant='h5' marginLeft="20px">Ingredient</Typography>
        <Box sx={{height:'180px', overflow:'scroll', backgroundColor:'white', marginLeft:"20px"}}>
            {
                ar.map((i)=>(
<TextField  
          id="outlined-required"
          label={`Ingredient ${i}`} sx={{width:"100%"}}></TextField>
                ))
            }
        </Box>
    </Box>
  )
}
