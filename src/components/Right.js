import { Box, Container } from '@mui/system';
import React from 'react';

import Rightside from './rightcontent';
import { Typography } from '@mui/material';

const R1=()=>{
    return(
        <>
        <Box backgroundColor='white' flex={0.8} position='relative' overflow='hidden' padding='50px 50px 50px 50px' > 
        <Typography variant='h2' sx={{ fontFamily: '"Brush Script MT", cursive'}}>
            WELCOME TO WORLD OF FOOD
        </Typography>
        <Rightside/>
        </Box>
        </>
        );
}

export default R1;