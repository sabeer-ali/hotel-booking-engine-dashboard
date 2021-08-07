import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import {
  Button,
  Grid,
  makeStyles,
  Modal,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  TextField,
  Paper,
  Typography,
  Divider,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import SingleBedIcon from "@material-ui/icons/SingleBed";
import KingBedIcon from "@material-ui/icons/KingBed";

import RoomTypes from "../mocData/roomTypes";

const rows = RoomTypes;

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "roomType",
    headerName: "Room Type",
    width: 150,
    editable: true,
  },
  {
    field: "bedSize",
    headerName: "Bed Size",
    width: 150,
    editable: true,
  },
  {
    field: "occupancy",
    headerName: "Occupancy",
    // type: "number",
    width: 200,
    editable: true,
  },
];

const BedLists = ({ handleChange, list }) => {
  return (
    <>
      {list.map((items, index) => (
        <FormGroup row style={{ alignItems: "center" }} key={index}>
          <FormControlLabel
            control={
              <Checkbox
                checked={items.isChecheked}
                onChange={() => handleChange(index)}
                name="checkedB"
                color="primary"
              />
            }
          />
          {items.option.map((item) =>
            item === "single" ? (
              <KingBedIcon style={{ fontSize: 30 }} />
            ) : (
              <SingleBedIcon style={{ fontSize: 30 }} />
            )
          )}
        </FormGroup>
      ))}
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  buttonWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "25px 0",
  },
  paper: {
    position: "absolute",
    width: "50%",
    height: "80%",
    backgroundColor: theme.palette.background.paper,
    // border: "0px solid ",
    borderRadius: 12,
    boxShadow: theme.shadows[10],
    padding: theme.spacing(2, 4, 3),
  },
  modalContainer: {
    backgroundColor: "red",
  },
  root: {
    // maxHeight: "40%",
    // overflow: "scroll",
  },
  mv3: {
    margin: "30px 0",
  },
}));

const getModalStyle = () => {
  const top = 40;
  const left = 40;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
};

const HotelsRoomTypes = () => {
  const classes = useStyles();
  const [openModal, setOpenModal] = React.useState(false);
  const [bedList, setBedList] = React.useState([
    { option: ["single", "single", "single"], isChecheked: false },
    { option: ["king", "single"], isChecheked: false },
    { option: ["king", "king"], isChecheked: false },
    { option: ["single", "single"], isChecheked: false },
    { option: ["king"], isChecheked: false },
    { option: ["single"], isChecheked: false },
  ]);

  const handleModal = (value) => {
    if (value !== undefined || value !== null) {
      setOpenModal(value);
    } else {
      setOpenModal(!openModal);
    }
  };

  const handleChange = (index) => {
    let tempBedList = [...bedList];
    tempBedList[index].isChecheked = !tempBedList[index].isChecheked;
    setBedList(tempBedList);
  };

  const body = (
    <div style={getModalStyle()} className={classes.paper}>
      <Typography id="simple-modal-title" variant="h6" align="center">
        Add Room Types - Details
      </Typography>
      <Divider />
      <Grid id="simple-modal-description">
        <form className={classes.root} noValidate autoComplete="off">
          <Grid>
            <Grid style={{ margin: "20px 0" }}>
              <TextField
                id="filled-basic"
                label="Room Type"
                variant="standard"
                style={{ width: "100%" }}
              />
            </Grid>
            <BedLists handleChange={handleChange} list={bedList} />
            <Grid>
              <TextField
                id="filled-basic"
                label="Double Bed Size Ex.: 130, 120-180"
                variant="standard"
                style={{ width: "100%" }}
              />
            </Grid>
          </Grid>

          <Grid row align="center" className={classes.mv3}>
            <Button variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </form>
      </Grid>
    </div>
  );

  return (
    <div style={{ height: "100%" }}>
      <Grid className={classes.buttonWrapper}>
        <Button variant="outlined" color="primary" onClick={handleModal}>
          Add Room Type
        </Button>
      </Grid>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        checkboxSelection={false}
        disableSelectionOnClick
        disableColumnFilter
        disableColumnMenu
        filterMode={false}
        density="standard"
      />
      <Modal
        open={openModal}
        onClose={() => handleModal(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};

export default HotelsRoomTypes;
