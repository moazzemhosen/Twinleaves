import { Button, Pagination, PaginationItem} from '@mui/material'
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'

import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import { ArrowBackIos } from '@mui/icons-material';
import { useSearchParams } from 'react-router-dom';

export const PagiantionRow =() => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page");

  const [currentPage, setPage] = useState(+page||1);

  useEffect(()=>{
     if(currentPage ){
      let params={};
      params.page=currentPage;
      setSearchParams(params);
     }
    
  },[currentPage,setSearchParams])
  return (
  <Box display={"flex"} width={"40%"} m={"auto"} justifyContent={"center"} >
    <Box display={"flex"} width={"100%"} m={"auto"} justifyContent={"space-between"}>
    <Button onClick={()=>setPage(currentPage-1)} disabled={currentPage <=1 ? true :false}><ArrowBackIos/></Button>
    <Box padding={"1% 0%"}>Page {currentPage}</Box>
    <Button onClick={()=>setPage(currentPage+1)}  disabled={currentPage >=9 ? true :false} ><ArrowForwardIos/></Button>
    </Box>
  </Box>
  )
}
