import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import React, { useState } from 'react'
import axios from 'axios';
export default function Output() {
  const [title,setTitle]=useState([]);
  const apiKey='b9277005ebf74f12b62510043e2869a5';
  axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=burger&instructionsRequired=true&fillIngredients=true&addRecipeInformation=true&addRecipeNutrition=true&apiKey=${apiKey}`)
      .then(response => {
        // Handle the successful response
        console.log(response.data);
      })
      .catch(error => {
        // Handle errors
        console.error('Error fetching data:', error);
      });
  return (
   <>
   
   </>
  )
}
