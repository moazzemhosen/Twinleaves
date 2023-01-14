import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";

import { Alert, Box, CircularProgress, Stack } from "@mui/material";

import TableRowData from "../components/TableRow";
import TableHeadData from "../components/TableHead";
import { useLocation, useSearchParams } from "react-router-dom";
import { PagiantionRow } from "../components/PaginationRow";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/AppReducer/actions";

export default function StickyHeadTable() {
  const dispatch = useDispatch();
  const location = useLocation();

  const [searchParams] = useSearchParams();
  const data = useSelector((state) => state.AppReducer);
  const { products } = data.data;
 
  let [row, setRow] = React.useState(products);
  //console.log(row);

  React.useEffect(() => {
    let getparams = {
      params: {
        page: searchParams.get("page") || 1,
      },
    };
    dispatch(getData(getparams));
  }, [location.search]);

  const handleSearch = (val) => {
    console.log(val);
    let updatedData = products.filter(
      (e) => e.name.toLowerCase().indexOf(val.toLowerCase()) >= 0
    );
    setRow(updatedData);
  };
  React.useEffect(() => {
    setRow(products);
  }, [products]);
  const handlechange = (e) => {
    console.log(e.target.value);
    let sortby = e.target.value;

    if (sortby == "asc") {
      let sortedData = products.sort((a, b) => a.mrp.mrp - b.mrp.mrp);
      setRow([...sortedData]);
      console.log(sortedData, "sorted data");
    } else if (sortby === "desc") {
      let sortedData = products.sort((a, b) => b.mrp.mrp - a.mrp.mrp);
      setRow([...sortedData]);
      console.log(sortedData, "sorted data");
    }
  };
  const handleBrandchange = (e) => {
    let brand = e.target.value;
    let upDatedData = products.filter((e) => e.brand === brand);
    setRow(upDatedData);
  };

  return (
    <>
      <Box>
        <input
          type="text"
          placeholder="Search Something.."
          onChange={(e) => handleSearch(e.target.value)}
        />
      </Box>
      <Box>
        <select onChange={(e) => handlechange(e)}>
          <option value="">Sort by Price</option>
          <option value="asc">low to high</option>
          <option value="desc">high to low</option>
        </select>
        <select onChange={(e) => handleBrandchange(e)}>
          <option value="">Brand Name</option>
          <option value="HUGGIES">HUGGIES</option>
          <option value="JOHNSON'S">JOHNSON'S</option>
          <option value="HDC">HDC</option>
          <option value="HIMALAYA">HIMALAYA</option>
          <option value="PAMPERS">PAMPERS</option>
        </select>
      </Box>
      {data.isLoading ? (
        <Box>
          {" "}
          <CircularProgress />{" "}
        </Box>
      ) : (
        <Paper sx={{ width: "90%", margin: "auto", overflow: "hidden" }}>
          <TableContainer align={"center"} sx={{ maxHeight: 440  }} spacing={2}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableHeadData />
              </TableHead>
              <TableBody>
                {row?.length === 0 ? (
                  <Stack sx={{ width: "100%" }}>
                    <Alert severity="error">
                      No Data Found — check it out!
                    </Alert>
                  </Stack>
                ) : (
                  row.map((row) => {
                    return <TableRowData key={row.id} row={row} />;
                  })
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      )}
      <PagiantionRow />
    </>
  );
}
