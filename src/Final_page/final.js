import { CardMedia, Typography,Stack, Button, Grid, CardContent } from '@mui/material'
import { Container} from '@mui/system'
import React from 'react'
import Image from './img1.jpg'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Card } from 'react-bootstrap'
import {useImage} from 'react-image';




export default function Final() {
    
    
const [title,setTitle]=useState([]);
const [nutrient,setn]=useState();

//const apiKey='4652d41224d74dbcb1ea92606a4e100f';
//const apikeymaja='b3a6549e3e4142e6a9a8219944003f85';
const apikeyVasi='75224b1718df478ea0892d31acae8ddf'


const apiKey1 = 'b9277005ebf74f12b62510043e2869a5';

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=burger&cuisine=italian&instructionsRequired=true&fillIngredients=true&addRecipeInformation=true&titleMatch=pasta&apiKey=${apiKey1}`);
      
      console.log(response.data);
      console.log(response.data.results[0].title);

      setTitle(response.data.results[0]);
      const recipeId = response.data.results[0].id;

      // Corrected the URL by adding '?' after 'nutritionLabel'
      const nutrient = await axios.get(`https://api.spoonacular.com/recipes/${recipeId}/nutritionLabel?apiKey=${apiKey1}`);
      
      console.log(nutrient.data);
      setn(nutrient.data);
    } catch (error) {
      // Handle errors
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, []);


        return (
            <>
        {/* <Button onClick={fetchData}>Search</Button> */}
      <Typography variant='h3'>
        Title:{title.title}
      </Typography>
            <Container>
        
        <CardMedia
        sx={{ height:'900px' }}
        image={title.image}
        title="green iguana"
      />
      <Stack direction='column' >
      <Typography variant=''>
        Servings:{title.servings}
      </Typography>
      <Typography variant=''>
        Health Score:{title.healthScore}
      </Typography>
      <Typography variant=''>
        Price Per Savings:{title.pricePerServing}
      </Typography>
      <Typography variant=''>
        {/* Cuisines:{title.cuisines[]} */}
      </Typography>
{
    title.vegetariant?(
        <Typography>veg</Typography>
    ):(<Typography>Non veg</Typography>)
}
      
      </Stack>
    
      <Stack direction='row'>
      <Grid container spacing={4}>
        {title.missedIngredients &&
          title.missedIngredients.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4} >
              <Card sx={{ height: '40%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="div"
                  sx={{
                    marginLeft:"65px",
                    marginTop:"10px",
                   width:'180px',
                   height:"180px"
                  }}
                ><img src={card.image} alt={title} style={{ width: '150px', height: '150px' }} /></CardMedia>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                   Ingredients: {card.aisle}
                  </Typography>
                  <Typography sx={{ paddingBottom: '10px', paddingTop: '10px' }}>
                    Name:{card.name}
                  </Typography>
                  <Typography sx={{ paddingBottom: '10px', paddingTop: '10px' }}>
                    Quantity:{card.original} {card.unit}
                  </Typography>
                  
                  
                </CardContent>
              </Card>
            </Grid>
          
          ))}
        </Grid>
      </Stack>
      <Typography>
        DIRECTIONS:
      </Typography>
      <Stack>
  {title.analyzedInstructions &&
    title.analyzedInstructions.map((item, index) => (
      <div key={index}>
        {item.steps.map((i, inIndex) => (
          <ul key={inIndex}>
            <li>{i.step}</li>
          </ul>
        ))}

       
      </div>
    ))}
</Stack>



      <Typography>
  Summary:
  <div dangerouslySetInnerHTML={{ __html: title.summary }} />
</Typography>
    <Stack>

    <div dangerouslySetInnerHTML={{ __html: nutrient }}/>
    </Stack>
      
    </Container>
      
</>      
  )
}