import { Box, Container, Stack } from '@mui/material'
import React, { useState } from 'react'
import Navbar from '../components/nav'
import Footer from '../components/footer'
import { useLoginData } from '../loginDataContext';
import { Typography } from '@mui/material';
import i1 from './profile.jpg';
import i2 from './proimage2.jpg';
import { height } from '@mui/system';
export default function Profile() {
    const { loginData, updateLoginData } = useLoginData();
    const [wishlistCount, setWishlistCount] = useState(0);
    const [userActivity, setUserActivity] = useState([]);
    const [achievements, setAchievements] = useState([]);
console.log(loginData);
  return (
  <>
  <Navbar/>
  <div style={{height:'8px',backgroundColor:'#19e6e2',position: 'fixed', top: 'heightOfNavbarAbove', left: 0, right: 0, zIndex: 1000}}></div>

  <Box>
  <img src={i1} style={{height:'400px',width:'100%'}}></img>
  <Typography  variant="h2" sx={{marginLeft:'600px',marginTop:'-250px',whiteSpace: 'nowrap' ,fontFamily: "" ,fontWeight:'bold',color:'black',marginBottom:'150px'}}>
         USER PROFILE
        </Typography>
  </Box>
  <Container>
  {loginData !== null && (
    <div style={{ padding: '50px', color: 'black', textAlign: 'center' }}>
        <Stack direction='row' spacing={10}>
<Box>    
     <img src={loginData.imageUrl} alt='Profile' style={{ width: '300px', height: '300px', borderRadius: '50%' }} />
      </Box>
      <Box sx={{marginLeft:"200px"}}>
      <div>
        <p>Name: {loginData.name}</p>
        <p>Email: {loginData.email}</p>
        <p>Google ID: {loginData.googleId}</p>
      </div>
      <div>
        <p>Wishlist Count: {wishlistCount}</p>
      </div>
      <div>
        <h2>Recent Activity</h2>
        <ul>
          {userActivity.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Achievements</h2>
        <ul>
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
      </Box>
 
      </Stack>
    </div>
  )}
</Container>


       <Footer />
      
 
    </>
  )
}
