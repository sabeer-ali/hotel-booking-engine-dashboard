import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import {
  TableBody,
  Button,
  Switch,
  Typography,
  Divider,
  TextField,
  ButtonGroup,
} from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import EditIcon from "@material-ui/icons/Edit";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  rateAddListContainer: {
    margin: "20px 0",
    padding: 20,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

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
  const classes = useStyles();
  const [form, setForm] = React.useState({ isActive: false, promo: false });
  const handleForm = (field, value) => {
    console.log("value", typeof value);
    let local = { ...form };
    local[`${field}`] =
      typeof value !== "boolean" ? value : value === true ? false : true;
    setForm(local);
  };

  const [state, setState] = React.useState({
    age: "",
    age1: "",
    name: "hai",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const handleChange1 = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div className="row b p-2 d-flex justify-content-center ">
      <div className="col-7 ">
        <Paper className={classes.rateAddListContainer}>
          <Typography>SETTINGS</Typography>
          <Divider />
          <div className="row my-2 d-flex align-items-center">
            <div className="col">
              <Typography>Active</Typography>
            </div>
            <div className="col">
              <Switch
                checked={form.isActive}
                onChange={() => handleForm("isActive", form.isActive)}
                color="primary"
                name="checkedB"
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            </div>
          </div>
          <div className="row my-2">
            <div className="row my-2 d-flex align-items-center">
              <div className="col">
                <Typography>Public name *</Typography>
              </div>
              <div className="col">
                <TextField id="standard-basic" />
              </div>
            </div>
          </div>
          <div className="row my-2">
            <div className="row my-2 d-flex align-items-center">
              <div className="col">
                <Typography>Internal name </Typography>
              </div>
              <div className="col">
                <TextField id="standard-basic" />
              </div>
            </div>
          </div>
          <div className="row my-2">
            <div className="row my-2 d-flex align-items-center">
              <div className="col">
                <Typography>Default release (minimum lead days) </Typography>
              </div>
              <div className="col">
                <TextField id="standard-basic" />
              </div>
            </div>
          </div>
          <div className="row my-2">
            <div className="row my-2 d-flex align-items-center">
              <div className="col">
                <Typography>Currency </Typography>
              </div>
              <div className="col">
                <TextField id="standard-basic" />
              </div>
            </div>
          </div>
          <div className="row my-2">
            <div className="row my-2 d-flex align-items-center">
              <div className="col">
                <Typography>Markets </Typography>
              </div>
              <div className="col">
                <TextField id="standard-basic" />
              </div>
            </div>
          </div>
          <div className="row my-2">
            <div className="row my-2 d-flex align-items-center">
              <div className="col">
                <Typography>Confidential (with promotional code)</Typography>
              </div>
              <div className="col">
                <Switch
                  checked={form.promo}
                  onChange={() => handleForm("promo", form.promo)}
                  color="primary"
                  name="checkedB"
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              </div>
            </div>
          </div>
        </Paper>

        <Paper className={classes.rateAddListContainer}>
          <Typography>ASSIGN TO ROOMS / OCCUPANCY AND BOARDS</Typography>
          <Divider />
          <div className="row my-2">
            <div className="row my-2 d-flex align-items-center">
              <div className="col">
                <Typography>Rooms / occupancy *</Typography>
              </div>
              <div className="col">
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="age-native-simple">Age</InputLabel>
                  <Select
                    native
                    value={state.age}
                    onChange={handleChange}
                    inputProps={{
                      name: "age",
                      id: "age-native-simple",
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
          <div className="row my-2">
            <div className="row my-2 d-flex align-items-center">
              <div className="col">
                <Typography>Boards </Typography>
              </div>
              <div className="col">
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="age-native-simple">Age</InputLabel>
                  <Select
                    native
                    value={state.age1}
                    onChange={handleChange1}
                    inputProps={{
                      name: "age",
                      id: "age-native-simple",
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
        </Paper>

        <Paper className={classes.rateAddListContainer}>
          <Typography>CANCELLATION AND PAYMENT POLICIES</Typography>
          <Divider />
          <div className="row my-2">
            <div className="row my-2 d-flex align-items-center">
              <div className="col">
                <Typography>Assigned policies</Typography>
              </div>
              <div className="col">
                <TextField id="standard-basic" />
              </div>
            </div>
          </div>
          <div className="row my-2">
            <div className="row my-2 d-flex align-items-center">
              <div className="col">
                <Typography>Default policy</Typography>
              </div>
              <div className="col">
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="age-native-simple">Age</InputLabel>
                  <Select
                    native
                    value={state.age1}
                    onChange={handleChange1}
                    inputProps={{
                      name: "age",
                      id: "age-native-simple",
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
        </Paper>

        <Paper className={classes.rateAddListContainer}>
          <Typography>OTHER CONFIGURATIONS</Typography>
          <Divider />
          <div className="row my-2">
            <div className="row my-2 d-flex align-items-center">
              <div className="col">
                <Typography>
                  Reference for calculating and minimum / maximum stay
                </Typography>
              </div>
              <div className="col">
                <ButtonGroup
                  disableElevation
                  variant="contained"
                  color="primary"
                >
                  <Button variant="outlined">BY Arrival</Button>
                  <Button>By Stay</Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
        </Paper>
      </div>
    </div>
  );
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
