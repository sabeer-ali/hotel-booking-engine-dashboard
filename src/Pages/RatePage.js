import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import { TableBody, Button } from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import EditIcon from "@material-ui/icons/Edit";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(id, currency) {
  return { id, currency };
}

const rows = [
  createData("C001", "AAA"),
  createData("C002", "BBB"),
  createData("C003", "CCC"),
  createData("C004", "DDD"),
  createData("C005", "EEE"),
];

const RateListComponent = () => {
  const classes = useStyles();
  return (
    <div>
      <div>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID </TableCell>
                <TableCell align="right">Currency Name</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.currency}</TableCell>
                  <TableCell align="right">
                    <EditIcon className="me-4" />
                    <HighlightOffIcon />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

const RateAddComponent = () => {
  return <div>002</div>;
};
const RatePage = () => {
  const classes = useStyles();
  const [isAdd, setAdd] = React.useState(false);
  return (
    <div>
      {isAdd ? (
        <div>
          <Button
            variant="outlined"
            color="primary"
            align="right"
            size="small"
            onClick={() => setAdd(false)}
          >
            <KeyboardBackspaceIcon />
          </Button>
        </div>
      ) : (
        <div className="d-flex justify-content-end my-4">
          <Button
            variant="contained"
            color="primary"
            align="right"
            size="small"
            onClick={() => setAdd(true)}
          >
            Add Rate
          </Button>
        </div>
      )}
      {isAdd ? <RateAddComponent /> : <RateListComponent />}
    </div>
  );
};

export default RatePage;
