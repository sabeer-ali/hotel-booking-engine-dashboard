import React from "react";
import { ButtonGroup, Paper, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const CurrenciesPage = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <Paper className="p-4">
        <Typography variant="h4">Markets-Currencie</Typography>
        <div className="row my-4">
          <div className="col d-flex align-items-center">
            <Typography>Hotel default currency</Typography>
          </div>
          <div className="col">
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <div className="row my-4">
          <div className="col d-flex align-items-center">
            <Typography>Show prices with taxes included</Typography>
          </div>
          <div className="col">
            <ButtonGroup
              disableElevation
              variant="contained"
              color="primary"
              size="small"
            >
              <Button variant="outlined">NO</Button>
              <Button>Yes</Button>
            </ButtonGroup>
          </div>
        </div>

        <div className="row my-4">
          <div className="col d-flex align-items-center">
            <Typography variant="p">EXCEPTIONS</Typography>
          </div>

          <div className="col">
            <Button
              variant="text"
              startIcon={<AddCircleOutlineIcon />}
              size="small"
            >
              Add Exception
            </Button>
          </div>
        </div>

        <div className="d-flex justify-content-end mt-5">
          <Button variant="contained" color="primary" size="small">
            Save
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default CurrenciesPage;
