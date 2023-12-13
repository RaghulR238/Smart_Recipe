import styled from '@emotion/styled';
import { AppBar, Hidden, Toolbar, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react'
import Up_left from './up_left';
import Up_right from './up_right';





const StyledToolBar = styled(Toolbar)({
    margin: '10px',
    padding: '5px',
    fontSize: '50px',
    alignItems: 'center',
  });


export default function Up() {
  return (
    <div >
  

      <AppBar position="sticky">
        <StyledToolBar>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
            UPLOAD YOUR RECIPE HERE!!
          </Typography>
        </StyledToolBar>
      </AppBar>
      <Stack direction='row'  sx={{ border: '9px solid black' ,borderRadius: '8px' }}  >
        <Up_left/>
        <Up_right/>
      </Stack>
      </div>
    
  )
}
