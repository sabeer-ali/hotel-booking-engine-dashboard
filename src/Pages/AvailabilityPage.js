import React from "react";
import {
  Button,
  Paper,
  Typography,
  InputLabel,
  withStyles,
  makeStyles,
  TableContainer,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Table,
} from "@material-ui/core";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";

import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import Chip from "@material-ui/core/Chip";
import BasicTable from "../Components/StickyTable";

const StickyTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    left: 0,
    position: "sticky",
    zIndex: theme.zIndex.appBar + 2,
  },
  body: {
    backgroundColor: "#ddd",
    minWidth: "50px",
    left: 0,
    position: "sticky",
    zIndex: theme.zIndex.appBar + 1,
  },
}))(TableCell);

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  head: {
    backgroundColor: "#fff",
    minWidth: "50px",
  },
  tableContainer: {
    maxHeight: "400px",
  },
  cell: {
    minWidth: "100px",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const AvailabilityPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  return (
    <div>
      <div className="d-flex justify-content-between">
        <Button variant="contained" color="primary">
          Filter
        </Button>
        <Button variant="contained" color="primary">
          Save
        </Button>
      </div>

      <div className="row my-4">
        <Paper>
          <div className="row p-2">
            <div className="col-auto d-flex align-items-center">
              <span>Filter</span>
            </div>

            <div className="col">
              <FormControl className={classes.formControl}>
                <Select
                  labelId="demo-mutiple-checkbox-label"
                  id="demo-mutiple-checkbox"
                  multiple
                  value={personName}
                  onChange={handleChange}
                  input={<Input />}
                  renderValue={(selected) => selected.join(", ")}
                  MenuProps={MenuProps}
                >
                  {names.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={personName.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>

          <div className="row">
            <BasicTable />
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default AvailabilityPage;
