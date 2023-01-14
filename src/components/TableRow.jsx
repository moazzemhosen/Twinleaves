import { TableCell, TableRow } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const TableRowData = ({ row }) => {

  return (
    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
      <TableCell  align={"left"}>
      <Link to={`/${row.id}`}>{row.id}</Link>
      </TableCell>

      <TableCell  align={"left"}>
      <Link to={`/${row.id}`}>{row.brand}</Link>
      </TableCell>

      <TableCell  align={"left"}>
      <Link to={`/${row.id}`}>{row.name}</Link>
      </TableCell>
      <TableCell  align={"left"}>
      <Link to={`/${row.id}`}>{row.description}</Link>
      </TableCell>
      <TableCell  align={"left"}>
      <Link to={`/${row.id}`}>{row.mrp.mrp}</Link>
      </TableCell>
     
      
    </TableRow>
  );
};

export default TableRowData;
