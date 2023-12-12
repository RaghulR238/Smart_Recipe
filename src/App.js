import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container, Grid} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { Stack, styled } from '@mui/system';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import Box from '@mui/material/Box';
import Content from './components/content';
import Rightside from './components/rightcontent';
import Navbar from './components/nav';
import SliderComponent from './components/rightcontent';
import SwipeableTextMobileStepper from './components/rightcontent';
import R1 from './components/Right';

function App() {
  return (
    <>
    <Navbar/>
    <Container maxWidth='xl'  >
     
    <Stack direction='row' spacing={2} justifyContent='space-between'>
      <Content />
      <R1/>
    </Stack>
    </Container>
    
    </>
  );
};

export default App;






//     <>
//     <Container maxWidth="lg">
//     <Grid container spacing={2}>
//   <Grid item xs={8}>
//     <Button variant='contained' sx={{width:"100%"}}>xs=8</Button>
//   </Grid>
//   <Grid item xs={4} >
//       <Button variant='contained'sx={{width:"100%"}}>xs=8</Button>
//   </Grid>
//   <Grid item xs={4}>
//   <Button variant='contained'sx={{width:"100%"}}>xs=8</Button>
//   </Grid>
//   <Grid item xs={8}>
//   <Button variant='contained'sx={{width:"100%"}}>xs=8</Button>
//   </Grid>
// </Grid>
// {/* Grid is a single dimensioned box whose width can be adjusted easily. 
// Stack is same as grid but it ca be adjusted in two way*/}
// </Container>















    /*{ <br></br><br></br>
<br></br>
<br></br>
<br></br>
<br></br>
    <Container maxWidth="lg">
      {/*  using container we can adjust the contents inside the container*/
    // <Box sx={{backgroundColor:'yellow'}}>Helo</Box>
    // </Container>


    // <StyledButton variant='contained'>My Button</StyledButton>
    // {/* creating a user defined style[styledButton] which can be used anywhere */}

    // <Container>
    //  {/* Typography is used to work with text,styling can done with its attributes */}
    //   <Typography variant='h6' component='h5' align='left' sx={{backgroundColor:'yellow',color:'red'}}>
    //   lorem
    //   </Typography>
    //   <Button variant="text" onClick={()=>console.log("clicked")}>Text</Button>
    //   <Button variant="contained">Contained</Button>
    //   <Button variant="outlined">Outlined</Button>
    //   <br></br>
    //   <Button variant="contained" disabled>Disabled Contained</Button>
    //   {/* disabled is used to disable the button */}
    //   <br></br>
    //   <Button variant="outlined" sx={{backgroundColor:'blue',color:'white'}}>Outlined</Button>
    //   {/* <AccessAlarmIcon/> */}
    //   {/* using the imported icons */}
    //   <Button variant="contained" startIcon={<AccessAlarmIcon/>}>Alarm</Button>
    //   {/* button with icon using startIcon */}
    //   </Container>
    //   </> */}
//   );
// }
// from material icons we can import icons and use it
// const StyledButton = styled(Button)({
//   backgroundColor: 'blue',
//   color: 'white',
//   '&:hover': {
//     backgroundColor: 'yellow',
//     color:'black'
//   },
// });
    // {/* creating a user defined style[styledButton] which can be used anywhere */}