import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import {
  InputLabel,
  TextField,
  Grid,
  Button,
  Paper,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";

import useAutocomplete from "@material-ui/lab/useAutocomplete";
import NoSsr from "@material-ui/core/NoSsr";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import styled from "styled-components";

import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";

import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";

import RoomTypes from "../mocData/roomTypes";

const Label = styled("label")`
  padding: 0 0 4px;
  line-height: 1.5;
  display: block;
`;

const InputWrapper = styled("div")`
  width: 600px;
  min-height: 50px;
  border: 1px solid #d9d9d9;
  background-color: #fff;
  border-radius: 4px;
  padding: 1px;
  display: flex;
  flex-wrap: wrap;

  &:hover {
    border-color: #40a9ff;
  }

  &.focused {
    border-color: #40a9ff;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }

  & input {
    font-size: 14px;
    height: 30px;
    box-sizing: border-box;
    padding: 4px 6px;
    width: 0;
    min-width: 30px;
    flex-grow: 1;
    border: 0;
    margin: 0;
    outline: 0;
  }
`;

const Tag = styled(({ label, onDelete, ...props }) => (
  <div {...props}>
    <span>{label}</span>
    <CloseIcon onClick={onDelete} />
  </div>
))`
  display: flex;
  align-items: center;
  height: 24px;
  margin: 2px;
  line-height: 22px;
  background-color: #fafafa;
  border: 1px solid #e8e8e8;
  border-radius: 2px;
  box-sizing: content-box;
  padding: 0 4px 0 10px;
  outline: 0;
  overflow: hidden;

  &:focus {
    border-color: #40a9ff;
    background-color: #e6f7ff;
  }

  & span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 15px;
    padding: 0px 25px;
  }

  & svg {
    font-size: 12px;
    cursor: pointer;
    padding: 4px;
  }
`;

const Listbox = styled("ul")`
  width: 300px;
  margin: 2px 0 0;
  padding: 0;
  position: absolute;
  list-style: none;
  background-color: #fff;
  overflow: auto;
  max-height: 250px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1;

  & li {
    padding: 5px 12px;
    display: flex;

    & span {
      flex-grow: 1;
      font-size: 15px;
    }

    & svg {
      color: transparent;
    }
  }

  & li[aria-selected="true"] {
    background-color: #fafafa;
    font-weight: 600;

    & svg {
      color: #1890ff;
    }
  }

  & li[data-focus="true"] {
    background-color: #e6f7ff;
    cursor: pointer;

    & svg {
      color: #000;
    }
  }
`;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightBold,
  },
  formControl: {},
  paper: {
    borderWidth: 0,
    padding: 10,
    height: 65,
  },
  rootImageList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    // width: "100%",
    // height: 335,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  imageInput: {
    display: "flex",
    flexDirection: "column",
    padding: 25,
    margin: 25,
  },

  listItemText: {
    fontSize: 10,
  },
  listItem: {
    padding: 0,
  },
}));

const top100Films = [
  { title: "Kitchen" },
  { title: "Refrigerator" },
  { title: "Washing machine" },
  { title: "Microwave" },
  { title: "Iron" },
  { title: "Coffee/tea maker" },
  { title: "Sink" },
  { title: "Living room" },
  { title: "Terrace" },
  { title: "Balcony" },
  { title: "Radio" },
  { title: "CD/DVD player" },
  { title: "Television" },
  { title: "Telephone" },
  { title: "Air conditioning" },
  { title: "Free mini-bar" },
  { title: "Free safe" },
  { title: "Free wired Internet" },
  { title: "Free Wi-Fi Internet" },
  { title: "Wi-Fi Internet (extra cost)" },
  { title: "Fitted carpet floor" },
  { title: "Parquet floor" },
  { title: "Wooden floor" },
];
const facilities_bathroom = [
  { title: "Shared bathroom" },
  { title: "Private bathroom" },
  { title: "Telephone" },
  { title: "Shower" },
  { title: "Bath with shower" },
  { title: "Separate bath and shower" },
  { title: "Hot tub" },
  { title: "Circular bath" },
  { title: "Bidet" },
  { title: "Hairdryer" },
  { title: "Magnifying mirror" },
  { title: "Bathrobe" },
  { title: "Slippers" },
  { title: "Toilet" },
];

const itemData = [
  {
    img: require("../assets/bike.jpg").default,
    title: "Image",
    author: "author",
    // cols: 2,
    date: "12-08-2021",
  },
  {
    img: require("../assets/burgers.jpg").default,
    title: "Image",
    author: "author",
    // cols: 2,
    date: "12-08-2021",
  },
  {
    img: require("../assets/hats.jpg").default,
    title: "Image",
    author: "author",
    // cols: 2,
    date: "12-08-2021",
  },
  {
    img: require("../assets/honey.jpg").default,
    title: "Image",
    author: "author",
    // cols: 2,
    date: "12-08-2021",
  },
  {
    img: require("../assets/morning.jpg").default,
    title: "Image",
    author: "author",
    // cols: 2,
    date: "12-08-2021",
  },
  {
    img: require("../assets/olive.jpg").default,
    title: "Image",
    author: "author",
    // cols: 2,
    date: "12-08-2021",
  },
  {
    img: require("../assets/plant.jpg").default,
    title: "Image",
    author: "author",
    // cols: 2,
    date: "12-08-2021",
  },
  {
    img: require("../assets/breakfast.jpg").default,
    title: "Image",
    author: "author",
    // cols: 2,
    date: "12-08-2021",
  },
];

const FacilitiesBathroom = () => {
  const classes = useStyles();
  const [form, setForm] = React.useState({ roomTypes: "" });
  const handleForm = (field, value) => {
    let tmpData = { ...form };
    tmpData[`${field}`] = value;
    setForm(tmpData);
  };

  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: "customized-hook-demo1",
    defaultValue: [
      facilities_bathroom[1],
      facilities_bathroom[2],
      facilities_bathroom[3],
      facilities_bathroom[4],
    ],
    multiple: true,
    options: facilities_bathroom,
    getOptionLabel: (option) => option.title,
  });
  return (
    <div className="row w-100 my-3">
      <NoSsr>
        <div>
          <div {...getRootProps()}>
            <Label {...getInputLabelProps()} className="fs-6 fw-bold mb-3">
              Bathroom Facilities
            </Label>
            <InputWrapper
              ref={setAnchorEl}
              className={focused ? "focused" : ""}
            >
              {value.map((option, index) => (
                <Tag label={option.title} {...getTagProps({ index })} />
              ))}

              <input {...getInputProps()} />
            </InputWrapper>
          </div>
          {groupedOptions.length > 0 ? (
            <Listbox {...getListboxProps()}>
              {groupedOptions.map((option, index) => (
                <li {...getOptionProps({ option, index })}>
                  <span>{option.title}</span>
                  <CheckIcon fontSize="small" />
                </li>
              ))}
            </Listbox>
          ) : null}
        </div>
      </NoSsr>
    </div>
  );
};

const ImageSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.rootImageList}>
      <Paper elevation={5} variant="outlined" className="px-4 pb-5">
        <Typography className="fw-bold px-3 pt-2 pb-3">
          Photos, 3D and videos
        </Typography>
        <Grid container justifyContent="center">
          <Grid item lg={10}>
            <Paper className={classes.imageInput}>
              <TextField id="standard-basic" label="Image Url" />
              <TextField id="standard-basic" label="Video Url" />
            </Paper>
          </Grid>
        </Grid>
        <ImageList rowHeight={250} className={classes.imageList} cols={4}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img src={item.img} alt={item.title} />
              <ImageListItemBar
                title={item.title}
                subtitle={<span>Date : {item.date}</span>}
                actionIcon={
                  <IconButton
                    aria-label={`info about ${item.title}`}
                    className={classes.icon}
                  >
                    <DeleteSweepIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Paper>
    </div>
  );
};

export default function HotelRoom() {
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: "customized-hook-demo",
    defaultValue: [
      top100Films[1],
      top100Films[2],
      top100Films[3],
      top100Films[4],
    ],
    multiple: true,
    options: top100Films,
    getOptionLabel: (option) => option.title,
  });

  const classes = useStyles();
  const [form, setForm] = React.useState({ roomTypes: "" });

  const handleForm = (field, value) => {
    let tmpData = { ...form };
    tmpData[`${field}`] = value;
    setForm(tmpData);
  };
  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="shadow rounded border-1"
        >
          <Typography className={classes.heading}>Facilities</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="w-100 mt-5">
            <Paper className="row w-100 mb-5 py-5" variant="outlined">
              <Grid container spacing={1}>
                <Grid item>
                  <Paper className={classes.paper} elevation={0}>
                    <InputLabel htmlFor="age-native-simple">
                      Room Type
                    </InputLabel>
                    <Select
                      native
                      value={form.age}
                      onChange={handleForm}
                      inputProps={{
                        name: "Room Type",
                        id: "age-native-simple",
                      }}
                      style={{ width: 250 }}
                    >
                      {RoomTypes.map((item) => {
                        console.log("item", item);
                        return (
                          <>
                            <option style={{ padding: 15 }}>
                              {item.roomType}
                            </option>
                          </>
                        );
                      })}
                    </Select>
                  </Paper>
                </Grid>
                <Grid item>
                  <Paper className={classes.paper} elevation={0}>
                    <TextField
                      id="standard-basic"
                      label="Number of rooms"
                      fullWidth
                    />
                  </Paper>
                </Grid>
                <Grid item>
                  <Paper className={classes.paper} elevation={0}>
                    <TextField
                      id="standard-basic"
                      label="Square metres"
                      fullWidth
                    />
                  </Paper>
                </Grid>
              </Grid>
            </Paper>

            <Paper variant="outlined" className="row p-3 mb-5 me-3">
              <TextField id="standard-basic" label="Description" />
              <ListItem style={{ padding: 5 }}>
                <ListItemIcon>
                  <InfoIcon style={{ fontSize: 15 }} className="text-danger" />
                </ListItemIcon>
                <ListItemText
                  id="switch-list-label-wifi"
                  primary="550 characters max."
                  classes={{ primary: classes.listItemText }}
                />
              </ListItem>
              <ListItem style={{ padding: 5 }}>
                <ListItemIcon>
                  <InfoIcon style={{ fontSize: 15 }} className="text-danger" />
                </ListItemIcon>
                <ListItemText
                  id="switch-list-label-wifi"
                  primary="Highlight the DIFFERENCES between rooms"
                  classes={{ primary: classes.listItemText }}
                />
              </ListItem>
              <ListItem style={{ padding: 5 }}>
                <ListItemIcon>
                  <InfoIcon style={{ fontSize: 15 }} className="text-danger" />
                </ListItemIcon>
                <ListItemText
                  id="switch-list-label-wifi"
                  primary="Describe style and decor"
                  classes={{ primary: classes.listItemText }}
                />
              </ListItem>
              <ListItem style={{ padding: 5 }}>
                <ListItemIcon>
                  <InfoIcon style={{ fontSize: 15 }} className="text-danger" />
                </ListItemIcon>
                <ListItemText
                  id="switch-list-label-wifi"
                  primary="Do not list facilities and services (they are shown elsewhere)"
                  classes={{ primary: classes.listItemText }}
                />
              </ListItem>
            </Paper>
            <Paper className="row w-100 ">
              <div className="col my-3">
                <NoSsr>
                  <div className="mb-5">
                    <div {...getRootProps()}>
                      <Label
                        {...getInputLabelProps()}
                        className="fs-6 fw-bold mb-3"
                      >
                        Room Facilities
                      </Label>
                      <InputWrapper
                        ref={setAnchorEl}
                        className={focused ? "focused" : ""}
                      >
                        {value.map((option, index) => (
                          <Tag
                            label={option.title}
                            {...getTagProps({ index })}
                          />
                        ))}

                        <input {...getInputProps()} />
                      </InputWrapper>
                    </div>
                    {groupedOptions.length > 0 ? (
                      <Listbox {...getListboxProps()}>
                        {groupedOptions.map((option, index) => (
                          <li {...getOptionProps({ option, index })}>
                            <span>{option.title}</span>
                            <CheckIcon fontSize="small" />
                          </li>
                        ))}
                      </Listbox>
                    ) : null}
                  </div>
                </NoSsr>
              </div>

              <div className="col">
                <FacilitiesBathroom />
              </div>
            </Paper>
            <div className="mt-5">
              <ImageSection />
            </div>
            <div className="my-5 d-flex justify-content-end">
              <Button variant="contained" color="primary">
                Save
              </Button>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
