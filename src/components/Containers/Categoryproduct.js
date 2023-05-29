import React from 'react'
import { useActionData, useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect } from 'react';
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid ,Button} from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import {selectcategoryproduct} from "../../redux/actions/Productsactions";

function Categoryproduct() {
    let {item} = useParams();
    const dispatch=useDispatch();
   
   const   categoryitem=useSelector(state=>state.allProducts.categoryproduct)
    console.log(categoryitem)
useEffect(() => {
    console.log({item})
        axios.get(`https://fakestoreapi.com/products/category/${item}`)
        .then(response=>{
        dispatch(selectcategoryproduct(response.data))
            
        })
        .catch(error=>console.log(error))
        }

  
, [item])

  return (
    <div><div className="card" >
    <Grid
      justify="flex-start"
      alignItems="flex-start"
      direction="row"
      container
      spacing={2}
    >
    {
        categoryitem.map((product) => {
            return(
          <div key={product.id}>
            <Grid item={1} xs={3} sm={6} md={12} sx={{padding:1}}>
              <Card className="productcard">
                <CardHeader
                  title=<Typography className="titlecard" variant="subtitle1">{product.title}</Typography>
                  
                />
                <CardMedia
                  component="img"
                  className="imagesize"
                  image={product.image}
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Rs: {product.price} /-
                  </Typography>
                  <Button variant="outlined" className="texttransform itemfloat cartcolor">Cart</Button> 
                  <Button variant="outlined" className="texttransform buycolor">Buy</Button> 
                </CardContent>
              </Card>
            </Grid>
          </div>)
    })}
    
     
    </Grid>
  </div>
  </div>
  )
}

export default Categoryproduct