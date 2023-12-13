import { Box, Container } from '@mui/system';
import React from 'react';

import Rightside from './rightcontent';

const R1=()=>{
    return(
        <>
        <Box backgroundColor='skyblue' flex={1} position='relative' overflow='hidden' padding='50px' > 
        <Rightside/>
        </Box>
        </>
        );
}

export default R1;