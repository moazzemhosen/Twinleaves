import { TableCell, TableRow } from '@mui/material'
import React from 'react'

const TableHeadData = () => {
  return (
    <TableRow>
    
      <TableCell
        align={"left"}
        style={{ minWidth:170,fontWeight:"bold" }}
      >
       ID
      </TableCell>
      <TableCell
        align={"left"}
        style={{ minWidth:170,fontWeight:"bold" }}
      >
       BRAND
      </TableCell>
      <TableCell
        align={"left"}
        style={{ minWidth:170,fontWeight:"bold" }}
      >
       NAME
      </TableCell>
      <TableCell
        align={"left"}
        style={{ minWidth:170,fontWeight:"bold" }}
      >
       DESCRIPTION
      </TableCell>
      <TableCell
        align={"left"}
        style={{ minWidth:170,fontWeight:"bold" }}
      >
       PRICE
      </TableCell>
  </TableRow>
  )
}

export default TableHeadData