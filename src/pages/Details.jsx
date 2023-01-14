import { Box } from '@mui/material';

import React from 'react'
import { useParams } from 'react-router-dom';
import style from "./Details.module.css"
import { useSelector } from 'react-redux';


const Details = () => {
    const {id}=useParams()
    const {products}=useSelector((state)=>state.AppReducer.data)
    console.log("pp",products);
    let SingleData=products.filter((e)=>e.id==id)[0]
    console.log("s",SingleData);

    

  return (
    <Box className={style.container}>
     <Box className={style.image_div}>
      <img className={style.img} src={SingleData.gs1_images.front} alt="" />
     </Box>
     <Box className={style.content}>
      <Box>
        <Box>Brand</Box>
        <Box>{SingleData.brand}</Box>
      </Box>
      <Box>
        <Box>Category</Box>
        <Box>{SingleData.category_level_1}</Box>
      </Box>
      <Box>
        <Box>Company Name</Box>
        <Box>{SingleData.company_detail.name}</Box>
      </Box>
      <Box>
        <Box>Manufacture Date:</Box>
        <Box>{SingleData.created_date}</Box>
      </Box>
      <Box>
        <Box>Expire Date:</Box>
        <Box>{SingleData.deactivation_date}</Box>
      </Box>
      <Box>
        <Box>Price:</Box>
        <Box>{SingleData.mrp.mrp}</Box>
      </Box>

     </Box>

    </Box>
  
  )
}

export default Details