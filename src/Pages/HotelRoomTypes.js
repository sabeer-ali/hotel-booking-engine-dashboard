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
import { CommonService } from "../Services/Services";
import { HOTEL_ROOM } from "../Services/Urls";
import { useLocation } from "react-router-dom";
import { getLocalData } from "../Utils/localStore";
// react Select
import Select from "react-select";
import makeAnimated from "react-select/animated";
import Bike from "../assets/bike.jpg";

const BedLists = ({ handleChange, list }) => {
  const animatedComponents = makeAnimated();
  const options = [
    {
      value: "chocolate 1",
      label: (
        <div>
          <img src={Bike} height="30px" width="30px" />
          Chocolate{" "}
        </div>
      ),
    },
    {
      value: "chocolate 2",
      label: (
        <div>
          <img src={Bike} height="30px" width="30px" />
          Chocolate{" "}
        </div>
      ),
    },
    {
      value: "chocolate 3",
      label: (
        <div>
          <img src={Bike} height="30px" width="30px" />
          Chocolate{" "}
        </div>
      ),
    },
  ];
  return (
    <div className="">
      {/* <Select options={options} isMulti components={animatedComponents} /> */}
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
    </div>
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

  const [roomTypeList, setRoomTypeList] = React.useState([]);
  const [selectedHotel, setSelectedHotel] = React.useState(null);

  React.useEffect(() => {
    getRoomList();
  }, []);

  const getRoomList = () => {
    getLocalData("selected_hotel").then((res, err) => {
      console.log("location", res.data, err);
      setSelectedHotel(res.data);
      CommonService.get(`${HOTEL_ROOM}/${res.data.hotel_id}`, (res, err) => {
        console.log("Res in H Room List", res, err);
        if (res !== null) setRoomTypeList(res.data);
      });
    });
  };

  const saveRoomData = () => {
    CommonService.post(`${HOTEL_ROOM}/${selectedHotel.hotel_id}`);
  };

  const handleModal = (value) => {
    if (value !== undefined || value !== null) {
      setOpenModal(value);
    } else {
      setOpenModal(!openModal);
    }
  };

  const handleBedChange = (index) => {
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
        <div className={classes.root} noValidate autoComplete="off">
          <Grid>
            <Grid style={{ margin: "20px 0" }}>
              <TextField
                id="filled-basic"
                label="Room Type"
                variant="standard"
                style={{ width: "100%" }}
              />
            </Grid>
            <BedLists handleChange={handleBedChange} list={bedList} />
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
        </div>
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

      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Room Name</th>
            <th scope="col">Number Of Rooms</th>
            <th scope="col">Area Sq Mtr</th>
            <th scope="col">Room Type</th>
          </tr>
        </thead>
        <tbody>
          {roomTypeList.length
            ? roomTypeList.map((item) => (
                <tr className="" style={{ padding: "2em 0" }}>
                  <td>{item.room_name}</td>
                  <td>{item.num_rooms}</td>
                  <td>{item.area_sqmtr}</td>
                  <td>{item.room_type}</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
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
