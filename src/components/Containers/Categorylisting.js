import React from "react";

import axios from "axios";
import { useEffect } from "react";
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import {
  selectcategories,
  setproducts,
} from "../../redux/actions/Productsactions";
import { Typography } from "@mui/material";

function Categorylisting() {
  let category = [];

  category = useSelector((state) => state.allProducts.category);
  console.log(category);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then(function (response) {
        console.log(response.data);

        dispatch(selectcategories(response.data));
      })

      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (category !== undefined) {
    return category.map((item) => {
   
      return <div key={item} ><Button href={`/category/${item}`} >{item}</Button></div>;
    });
  }

  // }
}
export default Categorylisting;
