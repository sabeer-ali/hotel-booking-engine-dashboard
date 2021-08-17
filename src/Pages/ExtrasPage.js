import React from "react";
import "react-calendar/dist/Calendar.css";
import {
  AccordionSummary,
  Button,
  Paper,
  Typography,
  AccordionDetails,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Checkbox,
  Divider,
  FormControl,
  Select,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import "../../node_modules/react-calendar/dist/Calendar.css";

import { Delete } from "@material-ui/icons";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { Accordion } from "@material-ui/core";
import Calendar from "react-calendar";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightBold,
  },
}));

const OfferList = [
  {
    name: "Airport Pick Up - Dubai Airport (3 Adults & 4 Bags)",

    isEnabled: true,
  },
  {
    name: "Airport Pick Up - Sharjah Airport (3 Adults & 4 Bags)",
    isEnabled: true,
  },
  {
    name: "Morning Desert Safari (sharing basis) (4hrs duration)- Adult",
    isEnabled: false,
  },
];

const Step1 = () => {
  const classes = useStyles();
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        className="shadow rounded"
      >
        <Typography variant="h2" className="fs-6 fw-bold ">
          Create new extra : Step 1 of 7 ( Name )
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className="row my-3">
          <div className="row my-3">
            <Typography className={classes.heading}>
              Name of the extra
            </Typography>
          </div>
          <div className="row ms-1 w-100">
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              size="small"
              fullWidth
            />
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

const Step2 = () => {
  const classes = useStyles();
  const [radioSelection, setRadio] = React.useState("Draft");
  const [chechBox, setCheckBox] = React.useState({
    box1: false,
    box2: false,
    box3: false,
    box4: false,
  });

  const handleCheckBox = (field) => {
    let temp = { ...chechBox };
    temp[`${field}`] = !temp[`${field}`];
    setCheckBox(temp);
  };

  const handleChange = (data) => {
    console.log("data", data);
    setRadio(data);
  };
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        className="shadow rounded"
      >
        <Typography variant="h2" className="fs-6 fw-bold ">
          Create new extra : Step 2 of 7 ( Availability )
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className="row my-3">
          <div className="row ms-1 w-100">
            <RadioGroup
              aria-label="gender"
              name="gender1"
              //   value={radioSelection}
            >
              <FormControlLabel
                value="Draft"
                control={<Radio />}
                label="Draft"
                onChange={() => handleChange("Draft")}
              />
              <FormControlLabel
                value="Enable"
                control={<Radio />}
                onChange={() => handleChange("Enable")}
                label="Enabled"
              />
            </RadioGroup>
          </div>

          {radioSelection === "Enable" ? (
            <div className="row ms-5">
              <div>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={chechBox.box1}
                      onClick={() => handleCheckBox("box1")}
                      name="checkedB"
                      color="primary"
                    />
                  }
                  label="Only offer in reservations"
                />
                <span className="ms-2">
                  <Select
                    native
                    // value={discountSelectedValue}
                    // value={drop1}
                    // onChange={handleDrop1}
                  >
                    <option value={1}>With all days within</option>
                    <option value={1}>With atleast onday within</option>
                    <option value={1}>that checkin</option>
                    <option value={1}>that checkout</option>
                  </Select>
                </span>
                <span className="ms-2">hese dates:</span>
              </div>

              {chechBox.box1 && <Calendar />}
            </div>
          ) : null}
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

const Step3 = () => {
  const classes = useStyles();

  const [hotelList, setHotelList] = React.useState([
    {
      name: "Standard King Room (1 adult (Aged 13 or more at checkout) + 1 baby (0 - 23 months old))",
      isSelected: false,
    },
    {
      name: "Standard King Room (1 adult (Aged 13 or more at checkout) + 1 child (2-12 y.o.) + 1 baby)",
      isSelected: false,
    },
    {
      name: "Standard King Room (2 adults (Aged 13 or more at checkout) + 1 baby (0 - 23 months old))",
      isSelected: false,
    },
    {
      name: "Standard King Room (2 adults (Aged 13 or more at checkout) + 1 child (2-12 y.o.) + 1 baby)",
      isSelected: false,
    },
    {
      name: "Standard Twin Room (1 adult (Aged 13 or more at checkout) + 1 baby (0 - 23 months old))",
      isSelected: false,
    },
  ]);

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        className="shadow rounded"
      >
        <Typography variant="h2" className="fs-6 fw-bold ">
          Create new offer: Step 3 of 7 ( Rooms )
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className="row my-3">
          <div className="col ms-1 w-100">
            <Typography className="my-3">
              It applies to these rooms / occupancy
            </Typography>
            <Divider />
            {hotelList.map((item, index) => {
              return (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={false}
                      //   onClick={() => handleCheckBox("box1")}
                      name="checkedB"
                      color="primary"
                    />
                  }
                  label={item.name}
                />
              );
            })}
          </div>
          <div className="col">
            <Typography className="my-3">ACCOMMODATION PLANS</Typography>
            <Divider />
            <FormControlLabel
              control={
                <Checkbox
                  checked={false}
                  //   onClick={() => handleCheckBox("box1")}
                  name="checkedB"
                  color="primary"
                />
              }
              label="Room only"
            />
            <FormControlLabel
              className="w-100"
              control={
                <Checkbox
                  checked={false}
                  //   onClick={() => handleCheckBox("box1")}
                  name="checkedB"
                  color="primary"
                />
              }
              label="Breakfast included"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={false}
                  //   onClick={() => handleCheckBox("box1")}
                  name="checkedB"
                  color="primary"
                />
              }
              label="Half Board (breakfast and dinner)"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={false}
                  //   onClick={() => handleCheckBox("box1")}
                  name="checkedB"
                  color="primary"
                />
              }
              label="Full Board ( breakfast,lunch and dinner )"
            />
          </div>
          <div className="col">
            <Typography className="my-3">RATES</Typography>
            <Divider />
            <FormControlLabel
              className="w-100"
              control={
                <Checkbox
                  checked={false}
                  //   onClick={() => handleCheckBox("box1")}
                  name="checkedB"
                  color="primary"
                />
              }
              label="BAR (AED)"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={false}
                  //   onClick={() => handleCheckBox("box1")}
                  name="checkedB"
                  color="primary"
                />
              }
              label="dontMapDontClose (AED)"
            />
            <FormControlLabel
              className="w-100"
              control={
                <Checkbox
                  checked={false}
                  //   onClick={() => handleCheckBox("box1")}
                  name="checkedB"
                  color="primary"
                />
              }
              label="NR (AED)"
            />
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

const Step4 = () => {
  const classes = useStyles();
  const [rateForm, setRateForm] = React.useState([
    { name: "Regular", type: "Radio" },
    {
      name: "Regular",
      isActive: false,
      label: "Regular",
      type: "Radio",
    },
    {
      name: "Fixed",
      isActive: false,
      label: "Fixed",
      type: "Radio",
      amount: 0,
      isDaysView: false,
      section: [
        {
          id: 0,
          description:
            "Standard King Room (1 adult (Aged 13 or more at checkout) + 1 baby (0 - 23 months old)) Room only",
          value: 0,
          daysView: [
            {
              day: "Mon",
              value: 0,
            },
            {
              day: "Tue",
              value: 0,
            },
            {
              day: "Wed",
              value: 0,
            },
            {
              day: "Thu",
              value: 0,
            },
            {
              day: "Fri",
              value: 0,
            },
            {
              day: "Sat",
              value: 0,
            },
            {
              day: "Sun",
              value: 0,
            },
          ],
        },
        {
          id: 1,
          description:
            "Standard King Room (1 adult (Aged 13 or more at checkout) + 1 baby (0 - 23 months old)) Breakfast included",
          value: 0,
          daysView: [
            {
              day: "Mon",
              value: 0,
            },
            {
              day: "Tue",
              value: 0,
            },
            {
              day: "Wed",
              value: 0,
            },
            {
              day: "Thu",
              value: 0,
            },
            {
              day: "Fri",
              value: 0,
            },
            {
              day: "Sat",
              value: 0,
            },
            {
              day: "Sun",
              value: 0,
            },
          ],
        },
        {
          id: 2,
          description:
            "Standard King Room (1 adult (Aged 13 or more at checkout) + 1 baby (0 - 23 months old))",
          value: 0,
          daysView: [
            {
              day: "Mon",
              value: 0,
            },
            {
              day: "Tue",
              value: 0,
            },
            {
              day: "Wed",
              value: 0,
            },
            {
              day: "Thu",
              value: 0,
            },
            {
              day: "Fri",
              value: 0,
            },
            {
              day: "Sat",
              value: 0,
            },
            {
              day: "Sun",
              value: 0,
            },
          ],
        },
        {
          id: 3,
          description:
            "Half Board (breakfast and dinner) Standard King Room (1 adult (Aged 13 or more at checkout) + 1 baby (0 - 23 months old))",
          value: 0,
          daysView: [
            {
              day: "Mon",
              value: 0,
            },
            {
              day: "Tue",
              value: 0,
            },
            {
              day: "Wed",
              value: 0,
            },
            {
              day: "Thu",
              value: 0,
            },
            {
              day: "Fri",
              value: 0,
            },
            {
              day: "Sat",
              value: 0,
            },
            {
              day: "Sun",
              value: 0,
            },
          ],
        },
        {
          id: 4,
          description: "Full Board ( breakfast,lunch and dinner )",
          value: 0,
          daysView: [
            {
              day: "Mon",
              value: 0,
            },
            {
              day: "Tue",
              value: 0,
            },
            {
              day: "Wed",
              value: 0,
            },
            {
              day: "Thu",
              value: 0,
            },
            {
              day: "Fri",
              value: 0,
            },
            {
              day: "Sat",
              value: 0,
            },
            {
              day: "Sun",
              value: 0,
            },
          ],
        },
      ],
    },
    {
      name: "Discount",
      isActive: false,
      label: "Discount",
      type: "Radio",
      isDropDown: false,
      list: [
        {
          label: "%",
          value: 1,
          inputValue: 0,
          exceptionalDates: [{ from: "", to: "", discount: 0 }],
          isSelected: true,
        },
        { label: "AED", value: 2, isSelected: false },
      ],
    },
    {
      name: "Increment",
      isActive: false,
      label: "Increment",
    },
    {
      name: "X-nights-booked",
      isActive: false,
      label: "One free night for every X nights booked",
    },
  ]);

  const handleRateForm = (value, type, index, type1, index2) => {
    console.log("value, type", value, type, index);
    let temp = [...rateForm];

    console.log("temp[index].name === value", index2);

    if (index === 1) {
      temp[2].isActive = false;
      temp[3].isActive = false;
      temp[2].isDaysView = false;
    } else if (index === 2) {
      temp[1].isActive = false;
      temp[3].isActive = false;

      temp[index].isDaysView = !type1;
    } else if (index === 3) {
      temp[2].isDaysView = false;
      temp[1].isActive = false;
      temp[2].isActive = false;

      if (type1 === "dropdown" || type1 === "dropdown-1") {
        temp[index].list[index2].isSelected =
          !temp[index].list[index2].isSelected;

        temp[index].list.map((item3, index3) => {
          if (index3 !== index2) {
            item3.isSelected = false;
          }
          return item3;
        });

        temp[index].isDropDown = !temp[index].isDropDown;
        // console.log("111222", temp[index]);
      } else if (type1) {
        temp[index].isDropDown = false;
      } else {
        temp[index].isDropDown = true;
      }
    }

    if (index === 1 || index === 2 || index === 3) {
      temp[index].isActive = true;
      temp[0].name = value;
    }

    setRateForm(temp);
  };

  const discountSelectedValue = () => {
    let temp = "";
    rateForm[3].list.map((item) => {
      if (item.isSelected) {
        temp = item.label;
      }
    });
    console.log("data", temp);
    return temp;
  };

  const [radio1, setRadio1] = React.useState("01");
  const [radio31, setRadio31] = React.useState("01");
  const [radio41, setRadio41] = React.useState("01");

  const handleChange = (event) => {
    setRadio1(event.target.value);
  };
  const handleChange31 = (event) => {
    setRadio31(event.target.value);
  };
  const handleChange41 = (event) => {
    setRadio41(event.target.value);
  };

  const [checked, setChecked] = React.useState(false);

  const handleCheck = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        className="shadow rounded"
      >
        <Typography variant="h2" className="fs-6 fw-bold ">
          Create new Extras: Step 4 of 7 ( Price )
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className="row my-3">
          <div className="row ms-1 w-100">
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={radio1}
              onChange={handleChange}
            >
              <div>
                <FormControlLabel
                  value="01"
                  control={<Radio />}
                  label="Per room / once"
                  //   onClick={() => handleRateForm("Regular", "Radio", 1)}
                />
                <span>ex. flowers, chocolate, late checkout,</span>
                {radio1 === "01" && (
                  <div>
                    <div>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        size="small"
                        style={{ width: 100 }}
                        className="ms-3"
                      />
                      <span className="ms-2">
                        AED You can write price 0 (free)
                      </span>
                    </div>
                  </div>
                )}
              </div>
              <div>
                <FormControlLabel
                  value="02"
                  control={<Radio />}
                  label="Per room / per night"
                  onClick={() => handleRateForm("Fixed", "Radio", 2)}
                />
                <span>ex. cleaning, crib, etc.</span>
                {radio1 === "02" && (
                  <div>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      size="small"
                    />
                    <span className="ms-2">
                      AED You can write price 0 (free)
                    </span>
                    <div>
                      <Checkbox
                        checked={checked}
                        onChange={handleCheck}
                        inputProps={{ "aria-label": "primary checkbox" }}
                      />
                      <span>
                        The client may choose the no. of nights he wants
                      </span>
                    </div>
                  </div>
                )}
              </div>
              <div>
                <FormControlLabel
                  value="03"
                  control={<Radio />}
                  label="Per person / once: "
                  onClick={() => handleRateForm("Fixed", "Radio", 2)}
                />
                <span>ex. tickets, tours, etc.</span>
                <div>
                  {radio1 === "03" && (
                    <div className="ms-4">
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        size="small"
                        className="ms-3"
                      />
                      <span className="ms-2">
                        AED You can write price 0 (free)
                      </span>
                      <RadioGroup
                        aria-label="gender"
                        name="gender1"
                        value={radio31}
                        onChange={handleChange31}
                      >
                        <div>
                          <FormControlLabel
                            value="31"
                            control={<Radio />}
                            label="Price per person "
                          />
                        </div>
                        <div>
                          <FormControlLabel
                            value="32"
                            control={<Radio />}
                            label="Price per adult"
                          />
                        </div>
                        <div>
                          <FormControlLabel
                            value="33"
                            control={<Radio />}
                            label="Price per child"
                          />
                        </div>
                      </RadioGroup>
                    </div>
                  )}
                </div>
              </div>
              <div>
                <FormControlLabel
                  value="04"
                  control={<Radio />}
                  label="Per person / per night: "
                  onClick={() => handleRateForm("Fixed", "Radio", 2)}
                />
                <span>Per person / per night: ex. VIP treatment, etc.</span>
                {radio1 === "04" && (
                  <div className="ms-4">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      size="small"
                      className="ms-3"
                    />
                    <span className="ms-2">
                      AED You can write price 0 (free)
                    </span>
                    <RadioGroup
                      aria-label="gender"
                      name="gender1"
                      value={radio41}
                      onChange={handleChange41}
                    >
                      <div>
                        <FormControlLabel
                          value="41"
                          control={<Radio />}
                          label="Price per person "
                        />
                      </div>
                      <div>
                        <FormControlLabel
                          value="42"
                          control={<Radio />}
                          label="Price per adult"
                        />
                      </div>
                      <div>
                        <FormControlLabel
                          value="43"
                          control={<Radio />}
                          label="Price per child"
                        />
                      </div>
                    </RadioGroup>
                  </div>
                )}
              </div>
              <div>
                <FormControlLabel
                  value="05"
                  control={<Radio />}
                  label="Per number of persons / once: "
                  onClick={() => handleRateForm("Fixed", "Radio", 2)}
                />
                <span>ex. airport shuttle, etc</span>
              </div>
              <div>
                <FormControlLabel
                  value="06"
                  control={<Radio />}
                  label="Once per reservation: "
                  onClick={() => handleRateForm("Fixed", "Radio", 2)}
                />
                <span>Once per reservation: ex.personal shopper</span>
                {radio1 === "06" && (
                  <div className="ms-4">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      size="small"
                      className="ms-3"
                    />
                    <span className="ms-2">
                      AED You can write price 0 (free)
                    </span>
                  </div>
                )}
              </div>
              <div>
                <FormControlLabel
                  value="07"
                  control={<Radio />}
                  label="One unit per reservation / per night: "
                  onClick={() => handleRateForm("Fixed", "Radio", 2)}
                />
                <span>One unit per reservation / per night</span>
                {radio1 === "07" && (
                  <div className="ms-4">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      size="small"
                      className="ms-3"
                    />
                    <span className="ms-2">
                      AED You can write price 0 (free)
                    </span>
                  </div>
                )}
              </div>
            </RadioGroup>
          </div>

          {/* <div>
            <Checkbox
              checked={checked1}
              onChange={handleChange1}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            Increment
          </div>

          <div>
            <Checkbox
              checked={data8}
              onChange={handleChange8}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            One free night for every X nights booked... (It also applies to meal
            plan supplements, if they exist)
          </div> */}

          {/* <div className="ms-2 ">
            <ExtraDiscount />
          </div> */}
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

const ExtraDiscount = () => {
  const [check1, setChecked1] = React.useState(false);
  const [check2, setChecked2] = React.useState(false);
  const [check3, setChecked3] = React.useState(false);
  const [check4, setChecked4] = React.useState(false);
  const [check5, setChecked5] = React.useState(false);
  const [check6, setChecked6] = React.useState(false);
  const [check7, setChecked7] = React.useState(false);
  const [check8, setChecked8] = React.useState(false);

  const [country1, setCountry1] = React.useState(false);
  const [country2, setCountry2] = React.useState(false);
  const [country3, setCountry3] = React.useState(false);

  const [drop1, setDrop1] = React.useState("");

  const [radio1, setRadio1] = React.useState("");

  const handleRadio1 = (event) => {
    setRadio1(event.target.value);
  };

  const handleChecked1 = (event) => {
    setChecked1(event.target.checked);
  };

  const handleChecked2 = (event) => {
    setChecked2(event.target.checked);
  };
  const handleChecked3 = (event) => {
    setChecked3(event.target.checked);
  };
  const handleChecked4 = (event) => {
    setChecked4(event.target.checked);
  };
  const handleChecked5 = (event) => {
    setChecked5(event.target.checked);
  };

  const handleChecked6 = (event) => {
    setChecked6(event.target.checked);
  };

  const handleChecked7 = (event) => {
    setChecked7(event.target.checked);
  };

  const handleChecked8 = (event) => {
    setChecked8(event.target.checked);
  };

  const handleDrop1 = (event) => {
    setDrop1(event.target.value);
  };

  const handleCountry1 = (event) => {
    setCountry1(event.target.checked);
  };
  const handleCountry2 = (event) => {
    setCountry2(event.target.checked);
  };
  const handleCountry3 = (event) => {
    setCountry3(event.target.checked);
  };

  return (
    <div>
      <div className="fw-bold my-3">Extra discount</div>
      <div>
        <Checkbox
          checked={check1}
          onChange={handleChecked1}
          inputProps={{ "aria-label": "primary checkbox" }}
        />
        Booking at night or weekends
      </div>
      {check1 ? (
        <div>
          <div className="ms-5">
            <div className="col-auto">
              Discount
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                style={{ width: 100 }}
                className="ms-3"
              />
              <span className="ms-2">%</span>
            </div>
            <div>
              <div className="row d-flex align-items-center">
                <div className="col-auto">From</div>
                <div className="col-auto">
                  <Checkbox
                    checked={check7}
                    onChange={handleChecked7}
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
                </div>
                <div className="col-auto">
                  <Select
                    native
                    // value={discountSelectedValue}
                    value={drop1}
                    onChange={handleDrop1}
                  >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                  </Select>
                </div>
                :00 To
                <div className="col-auto">
                  <Select
                    native
                    // value={discountSelectedValue}
                    // value={drop1}
                    // onChange={handleDrop1}
                  >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                  </Select>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="col-auto ms-4">
              <Checkbox
                checked={check8}
                onChange={handleChecked8}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              Weekends: from friday at 8 pm to monday at 8 am
            </div>
          </div>
          <div className="ms-5">
            <div className="text-secondary my-4">
              Exceptions (stay dates) ( = 0 )
            </div>
            <div className="row">
              <div className="col-auto">
                <Calendar />
              </div>
              <div className="col-auto">
                <Calendar />
              </div>
              <div className="col-auto">
                Discount %
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  style={{ width: 100 }}
                  className="ms-3"
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {/* 02 */}
      <div>
        <Checkbox
          checked={check2}
          onChange={handleChecked2}
          inputProps={{ "aria-label": "primary checkbox" }}
        />
        Additional discount for long stays
      </div>
      {check2 ? (
        <div className="ms-5 my-4">
          <div className="row">
            <div className="col-auto">Minimum nights:</div>
            <div className="col-auto">
              <Select
                native
                // value={discountSelectedValue}
                // value={drop1}
                // onChange={handleDrop1}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
              </Select>
            </div>
          </div>
          <div className="mt-3">
            <div className="col-auto">
              Discount
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                style={{ width: 100 }}
                className="ms-3"
              />
            </div>
          </div>
        </div>
      ) : null}
      <div>
        <Checkbox
          checked={check3}
          onChange={handleChecked3}
          inputProps={{ "aria-label": "primary checkbox" }}
        />
        For early booking
      </div>
      {check3 ? (
        <div>
          <div className="ms-5">
            <span className="me-0">Minimum nights : </span>
            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              style={{ width: 100 }}
              className="ms-3"
            />
            <span className="ms-2">days</span>
          </div>

          <div className="ms-5 mt-4">
            <span className="me-5">
              <span className="ms-5">-</span>
            </span>
            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              style={{ width: 100 }}
              className="ms-3"
            />
            <span className="ms-2">%</span>
          </div>
        </div>
      ) : null}
      <div>
        <Checkbox
          checked={check4}
          onChange={handleChecked4}
          inputProps={{ "aria-label": "primary checkbox" }}
        />
        By country
      </div>
      {check4 ? (
        <div className="ms-5">
          <div>
            <div>
              <Checkbox
                checked={country1}
                onChange={handleCountry1}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              India
              {country1 && (
                <>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    style={{ width: 100 }}
                    className="ms-3"
                  />
                  <span className="mx-2">%</span>
                </>
              )}
            </div>

            <div className="my-2">
              <Checkbox
                checked={country2}
                onChange={handleCountry2}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              Qatar
              {country2 && (
                <>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    style={{ width: 100 }}
                    className="ms-3"
                  />
                  <span className="mx-2">%</span>
                </>
              )}
            </div>

            <div className="my-2">
              <Checkbox
                checked={country3}
                onChange={handleCountry3}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              Dubai
              {country3 && (
                <>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    style={{ width: 100 }}
                    className="ms-3"
                  />
                  <span className="mx-2">%</span>
                </>
              )}
            </div>
          </div>
        </div>
      ) : null}
      <div>
        <Checkbox
          checked={check5}
          onChange={handleChecked5}
          inputProps={{ "aria-label": "primary checkbox" }}
        />
        By device
      </div>
      {check5 ? (
        <div>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={radio1}
            onChange={handleRadio1}
            className="ms-5"
          >
            <div>
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Desktop / Tablet "
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Mobile"
              />
            </div>
            <div className="my-3">
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                style={{ width: 100 }}
                className="ms-3"
              />
              <span className="mx-2">%</span>
            </div>
          </RadioGroup>
        </div>
      ) : null}
      <div>
        <Checkbox
          checked={check6}
          onChange={handleChecked6}
          inputProps={{ "aria-label": "primary checkbox" }}
        />
        For last minute
      </div>
      {check6 ? (
        <div className="ms-5">
          <div>
            <span className="mx-2">From</span>
            <Select
              native
              // value={discountSelectedValue}
              // value={drop1}
              // onChange={handleDrop1}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
            </Select>
            <span className="mx-2">hours before</span>
          </div>
          <div className="my-3">
            <span className="me-2">-</span>
            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              style={{ width: 100 }}
              className="ms-3"
            />
            <span className="ms-2">%</span>
          </div>
        </div>
      ) : null}
    </div>
  );
};

const Step5 = () => {
  const classes = useStyles();

  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);
  const [checked4, setChecked4] = React.useState(false);
  const [checked5, setChecked5] = React.useState(false);
  const [checked6, setChecked6] = React.useState(false);
  const [checked7, setChecked7] = React.useState(false);
  const [checked8, setChecked8] = React.useState(false);
  const [checked9, setChecked9] = React.useState(false);
  const [checked10, setChecked10] = React.useState(false);
  const [checked11, setChecked11] = React.useState(false);
  const [checked12, setChecked12] = React.useState(false);
  const [checked13, setChecked13] = React.useState(false);
  const [checked14, setChecked14] = React.useState(false);

  const handleChange1 = (event) => {
    setChecked1(event.target.checked);
  };
  const handleChange2 = (event) => {
    setChecked2(event.target.checked);
  };
  const handleChange3 = (event) => {
    setChecked3(event.target.checked);
  };
  const handleChange4 = (event) => {
    setChecked4(event.target.checked);
  };
  const handleChange5 = (event) => {
    setChecked5(event.target.checked);
  };
  const handleChange6 = (event) => {
    setChecked6(event.target.checked);
  };
  const handleChange7 = (event) => {
    setChecked7(event.target.checked);
  };
  const handleChange8 = (event) => {
    setChecked8(event.target.checked);
  };
  const handleChange9 = (event) => {
    setChecked9(event.target.checked);
  };
  const handleChange10 = (event) => {
    setChecked10(event.target.checked);
  };
  const handleChange11 = (event) => {
    setChecked11(event.target.checked);
  };
  const handleChange12 = (event) => {
    setChecked12(event.target.checked);
  };
  const handleChange13 = (event) => {
    setChecked13(event.target.checked);
  };
  const handleChange14 = (event) => {
    setChecked14(event.target.checked);
  };

  const [radio1, setRadio1] = React.useState("female");

  const handleRadio = (event) => {
    setRadio1(event.target.value);
  };

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        className="shadow rounded"
      >
        <Typography variant="h2" className="fs-6 fw-bold ">
          Create new Extras : Step 5 of 7 ( Restrictions )
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className="row my-3">
          <div>
            <Checkbox
              checked={checked2}
              onChange={handleChange2}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <span>Days in advance</span>
            {checked2 && (
              <span>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  style={{ width: 100 }}
                  className="ms-3"
                />
                <span className="ms-2">Day/s in advance</span>
              </span>
            )}
          </div>

          <div>
            <Checkbox
              checked={checked4}
              onChange={handleChange4}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <span>Minimum stay</span>
            {checked4 && (
              <span className="ms-5">
                <Select
                  native
                  // value={discountSelectedValue}
                  // value={drop1}
                  // onChange={handleDrop1}
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                  <option value={10}>10</option>
                </Select>
              </span>
            )}
          </div>
          <div>
            <Checkbox
              checked={checked5}
              onChange={handleChange5}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <span>Maximum stay</span>
            {checked5 && (
              <span className="ms-5">
                <span>
                  <Select
                    native
                    // value={discountSelectedValue}
                    // value={drop1}
                    // onChange={handleDrop1}
                  >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                  </Select>
                </span>
              </span>
            )}
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

const Step6 = () => {
  const classes = useStyles();

  const [checked1, setChecked1] = React.useState(true);
  const [checked2, setChecked2] = React.useState(true);

  const handleChange1 = (event) => {
    setChecked1(event.target.checked);
  };
  const handleChange2 = (event) => {
    setChecked2(event.target.checked);
  };

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        className="shadow rounded"
      >
        <Typography variant="h2" className="fs-6 fw-bold ">
          Create new Extras: Step 6 of 7 ( Marketing )
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className="row my-3">
          <div>Do you need ideas what to write? Examples and ideas</div>
          <div>Subtitle: (optional, max 50 characters)</div>
          <div className="row  my-4">
            <div className="col">
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                fullWidth
              />
            </div>
            <div className="col">
              <div>Use this to mention a good reason to buy the extra.</div>
              <div className="my-2">
                Do not repeat words that you have used in the name.
              </div>
              <div>
                This text will not be sent in the written confirmation, so do
                not included any important detail.
              </div>
            </div>
          </div>
          <div className="row  my-4">
            <div className="col">
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                fullWidth
              />
            </div>
            <div className="col">
              <div>Make it attractive and convince.</div>
              <div className="my-2">
                Do not repeat words already used in name or subtitle.
              </div>
              <div>
                This text will not be sent in the written confirmation, so do
                not included any important detail.
              </div>
            </div>
          </div>

          <div className="row  my-4">
            <div className="col">
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                fullWidth
              />
            </div>
            <div className="col">
              <div className="my-2">
                Only if there is a condition or restriction missing.
              </div>
            </div>
          </div>
          <div className="row  my-4">
            <div className="col">
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                fullWidth
              />
            </div>
            <div className="col">
              <div>Use this to mention a good reason to buy the extra.</div>
              <div className="my-2">
                Do not repeat words that you have used in the name.
              </div>
              <div>
                This text will not be sent in the written confirmation, so do
                not included any important detail.
              </div>
            </div>
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

const Step7 = () => {
  const classes = useStyles();

  const [checked1, setChecked1] = React.useState(true);
  const [checked2, setChecked2] = React.useState(true);

  const handleChange1 = (event) => {
    setChecked1(event.target.checked);
  };
  const handleChange2 = (event) => {
    setChecked2(event.target.checked);
  };

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        className="shadow rounded"
      >
        <Typography variant="h2" className="fs-6 fw-bold ">
          Create new offer: Step 7 of 7 ( Marketing )
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className="row my-3">
          <div>
            <div className="my-4">
              <span className="fw-bold">Description (Optional)</span>
              <span className="ms-4">
                <Select
                  native
                  // value={discountSelectedValue}
                  // value={drop1}
                  // onChange={handleDrop1}
                >
                  <option value={1}>English</option>
                  <option value={2}>Arabic</option>
                  <option value={3}>French</option>
                </Select>
              </span>
            </div>
            <div>
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                fullWidth
              />
            </div>
            <div className="my-3 mx-5">
              (Eg. Getting ahead has a prize: Enjoy our offer for reservations
              made with two or more months of advance. 15% discount on the
              normal price. Offer only available for reservations through the
              hotel website.)
            </div>

            <div>
              <span className="fw-bold">Price description:</span>
              <span className="ms-4">
                <Select
                  native
                  // value={discountSelectedValue}
                  // value={drop1}
                  // onChange={handleDrop1}
                >
                  <option value={1}>English</option>
                  <option value={2}>Arabic</option>
                  <option value={3}>French</option>
                </Select>
              </span>
            </div>
            <div className="my-3">
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                label="(max. 35 characters)"
              />
            </div>
            <div>
              <ul>
                <li>-10%</li>
                <li>From 120€ by double room/night</li>
                <li>Free Night</li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <Checkbox
                checked={checked2}
                onChange={handleChange2}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <span className="ms-3">
                Hide it at at the dynamic website section
              </span>
            </div>
            <div>
              <Checkbox
                checked={checked2}
                onChange={handleChange2}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <span className="ms-3">
                Show the calculated exact discount after the offer name
              </span>
            </div>
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

const OfferAddSteps = () => {
  const classes = useStyles();

  return (
    <>
      <Step1 />
      <Step2 />
      <Step3 />
      <Step4 />
      <Step5 />
      <Step6 />
      <Step7 />
    </>
  );
};

const ExtrasListing = () => {
  return (
    <div className="">
      {OfferList.map((item) => {
        return (
          <Paper style={{ width: "auto" }} className="p-3 my-2 row">
            <div className="col">
              <Typography color="primary" className="fw-bold">
                {item.name}
              </Typography>
            </div>
            <div className="col-auto d-flex align-items-center">
              <Typography style={{ color: item.isEnabled ? "green" : "red" }}>
                {item.isEnabled ? "Enabled" : "Draft"}
              </Typography>
              <Button variant="text">
                <Delete />
              </Button>
            </div>
          </Paper>
        );
      })}
    </div>
  );
};

const ExtrasPage = () => {
  const [isAdd, setAdd] = React.useState(false);
  return (
    <div>
      {isAdd ? (
        <div>
          <div className=" my-5">
            <Button
              variant="outlined"
              color="primary"
              onClick={() => setAdd(false)}
            >
              <KeyboardBackspaceIcon />
            </Button>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-end my-5">
          <Button
            variant="contained"
            color="primary"
            onClick={() => setAdd(true)}
          >
            Create New Extras
          </Button>
        </div>
      )}
      {isAdd ? <OfferAddSteps /> : <ExtrasListing />}
    </div>
  );
};

export default ExtrasPage;
