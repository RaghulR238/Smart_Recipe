import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center' color='white' bgColor='dark' style={{marginTop:'300px'}} >
     
        <section className='mb-0' style={{ marginTop: '-200px' }}>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>

        

        <section className='mb-0'>
          <p>
          Explore the art of cooking with our handpicked selection of recipes that span various cuisines, dietary preferences, and skill levels. Whether you're a seasoned home cook or just starting your culinary journey, our recipes are here to guide you with clear instructions, fresh ingredients, and the promise of delightful flavors.
          </p>
          <p>
          Welcome to the world of delicious possibilities! Our collection of recipes brings you a diverse array of culinary creations to suit every taste and occasion. From quick and easy weekday meals to impressive dishes for special gatherings, each recipe is crafted with care and designed to inspire your inner chef.
          </p>
        </section>

        
   
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
  © 2023 Copyright @raghulrajan2887@gmail.com
</div>

    </MDBFooter>
  );
}