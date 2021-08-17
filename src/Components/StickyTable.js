import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import { TableRow, TextField } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    width: 550,
  },
  sticky: {
    position: "sticky",
    left: -12,
    background: "white",
    boxShadow: "5px 2px 5px grey",
    width: 120,
    zIndex: 1000,
  },
});

function createData(
  name,
  date1,
  date2,
  date3,
  date4,
  date5,
  date6,
  date7,
  date8,
  date9,
  date10,
  date11,
  date12,
  date13
) {
  return {
    name,
    date1,
    date2,
    date3,
    date4,
    date5,
    date6,
    date7,
    date8,
    date9,
    date10,
    date11,
    date12,
    date13,
  };
}

const rows = [
  createData("Standard King Room", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13),
  createData("Standard King Room", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13),
  createData("Standard King Room", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13),
  createData("Standard King Room", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13),
  createData("Standard King Room", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <>
      <TableContainer
        style={{ maxWidth: 1000 }}
        className="border rounded shadow"
      >
        <Table
          className={classes.table}
          aria-value="simple table"
          style={{ tableLayout: "fixed" }}
        >
          <TableHead>
            <TableRow>
              <TableCell className={classes.sticky}>
                Dessert (100g serving)
              </TableCell>
              <TableCell align="right" style={{ width: 150 }}>
                date
              </TableCell>
              <TableCell align="right" style={{ width: 150 }}>
                date
              </TableCell>
              <TableCell align="right" style={{ width: 150 }}>
                date
              </TableCell>
              <TableCell align="right" style={{ width: 150 }}>
                date
              </TableCell>
              <TableCell align="right" style={{ width: 150 }}>
                date
              </TableCell>
              <TableCell align="right" style={{ width: 150 }}>
                date
              </TableCell>
              <TableCell align="right" style={{ width: 150 }}>
                date
              </TableCell>
              <TableCell align="right" style={{ width: 150 }}>
                date
              </TableCell>
              <TableCell align="right" style={{ width: 150 }}>
                date
              </TableCell>
              <TableCell align="right" style={{ width: 150 }}>
                date
              </TableCell>
              <TableCell align="right" style={{ width: 150 }}>
                date
              </TableCell>
              <TableCell align="right" style={{ width: 150 }}>
                date
              </TableCell>
              <TableCell align="right" style={{ width: 150 }}>
                date
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              console.log("row 55555", row);
              return (
                <TableRow key={row.name}>
                  <TableCell
                    className={classes.sticky}
                    component="th"
                    scope="row"
                  >
                    {row.name}
                  </TableCell>

                  <TableCell align="right" style={{ width: 50 }}>
                    <TextField
                      id="outlined-number"
                      value={row.date1}
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell align="right" style={{ width: 50 }}>
                    <TextField
                      id="outlined-number"
                      value={row.date2}
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell align="right" style={{ width: 50 }}>
                    <TextField
                      id="outlined-number"
                      value={row.date3}
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell align="right" style={{ width: 50 }}>
                    <TextField
                      id="outlined-number"
                      value={row.date4}
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell align="right" style={{ width: 50 }}>
                    <TextField
                      id="outlined-number"
                      value={row.date5}
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell align="right" style={{ width: 50 }}>
                    <TextField
                      id="outlined-number"
                      value={row.date6}
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell align="right" style={{ width: 50 }}>
                    <TextField
                      id="outlined-number"
                      value={row.date7}
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell align="right" style={{ width: 50 }}>
                    <TextField
                      id="outlined-number"
                      value={row.date8}
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell align="right" style={{ width: 50 }}>
                    <TextField
                      id="outlined-number"
                      type="number"
                      value={row.date9}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell align="right" style={{ width: 50 }}>
                    <TextField
                      id="outlined-number"
                      value={row.date10}
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell align="right" style={{ width: 50 }}>
                    <TextField
                      id="outlined-number"
                      value={row.date11}
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell align="right" style={{ width: 50 }}>
                    <TextField
                      id="outlined-number"
                      value={row.date12}
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell align="right" style={{ width: 50 }}>
                    <TextField
                      id="outlined-number"
                      value={row.date13}
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
