import axios from "axios";
import { useEffect } from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setproducts,selectcategories } from "../../redux/actions/Productsactions";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

// import IconButton from '@mui/material/IconButton';
// function ProductsListing() {
//

//   return (
//     <div className='flexing'>
//     {renderlist}
//     </div>
//   )
// }

// export default ProductsListing
import React from "react";

function ProductsListing() {
  const productss = useSelector((state) => state.allProducts.products);
  let category = [];

  category = useSelector((state) => state.allProducts.category);
  console.log(category);
  const dispatch1 = useDispatch();
  const dispatch = useDispatch();

  useEffect(() => {
    axios
    .get("https://fakestoreapi.com/products/categories")
    .then(function (response) {
      console.log(response.data);

      dispatch1(selectcategories(response.data));
    })

    .catch((error) => {
      console.error(error);
    });
    axios
      .get("https://fakestoreapi.com/products")
      .then(function (response) {
        console.log(response.data);
        dispatch(setproducts(response.data));
      })

      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (<div>
    <div   className="centerscreen" >
    <div className="card" >
      <Grid
        justify="flex-start"
        alignItems="flex-start"
        direction="row"
        container
        spacing={1}
      >
        {productss.map((product) => {
            return(
          <div  key={product.id}>
            <Grid item={1} xs={3} sm={6} md={12} sx={{padding:1}}>
              <Card className="productcard">
                <CardHeader
                  title=<Typography className="titlecard"variant="subtitle2">{product.title}</Typography>
                 
                />
                <CardMedia
                className="imagesize"
                  component="img"
                
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
    <div className="leftside">
    <h4>Categories</h4>
   { category !== undefined ?
        category.map((item) => {
       
          return <div key={item} >
          <Button className="texttransform" href={`/category/${item}`} >{item}</Button></div>;
        }):null
      }</div>
    </div>
  );
}

export default ProductsListing;
