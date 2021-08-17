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
    name: "More than 20 Night Offer",
    discription:
      "Standard King Room (1 adult (Aged 13 or more at checkout) + 1 baby (0 - 23 months old))",
    isEnabled: true,
  },
  {
    name: "More than 10 Night Offer",
    discription:
      "Standard King Room (1 adult (Aged 13 or more at checkout) + 1 child (2-12 y.o.) + 1 baby)",
    isEnabled: true,
  },
  {
    name: "More than 7 Night Offer",
    discription:
      "Standard King Room (2 adults (Aged 13 or more at checkout) + 1 baby (0 - 23 months old))",
    isEnabled: false,
  },
  {
    name: "More than 6 Night Offer",
    discription:
      "Standard King Room (2 adults (Aged 13 or more at checkout) + 1 child (2-12 y.o.) + 1 baby)",
    isEnabled: false,
  },
  {
    name: " Xmas Offer",
    discription:
      "Standard Twin Room (1 adult (Aged 13 or more at checkout) + 1 baby (0 - 23 months old))",
    isEnabled: false,
  },
  {
    name: " Onam Offer",
    discription:
      "Standard Twin Room (1 adult (Aged 13 or more at checkout) + 1 child (2-12 y.o.) + 1 baby)",
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
          Create new offer: Step 1 of 7 ( Name )
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className="row my-3">
          <div className="row my-3">
            <Typography className={classes.heading}>
              Name of the offer
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
          Create new offer: Step 2 of 7 ( Availability )
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
                label="Draft(not publicly available)"
                onChange={() => handleChange("Draft")}
              />
              <FormControlLabel
                value="Enable"
                control={<Radio />}
                onChange={() => handleChange("Enable")}
                label="Enabled(whenever there is general availability)"
              />
            </RadioGroup>
          </div>

          {radioSelection === "Enable" ? (
            <div className="row ms-5">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={chechBox.box1}
                    onClick={() => handleCheckBox("box1")}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="Also, it must match these dates of STAY..."
              />
              {chechBox.box1 && <Calendar />}
              <FormControlLabel
                control={
                  <Checkbox
                    checked={chechBox.box2}
                    onClick={() => handleCheckBox("box2")}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="It must coincide with these CHECK-IN dates ..."
              />
              {chechBox.box2 && <Calendar />}
              <FormControlLabel
                control={
                  <Checkbox
                    cchecked={chechBox.box3}
                    onClick={() => handleCheckBox("box3")}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="It must also coincide with the CHECK-OUT dates ..."
              />
              {chechBox.box3 && <Calendar />}
              <FormControlLabel
                control={
                  <Checkbox
                    checked={chechBox.box4}
                    onClick={() => handleCheckBox("box4")}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="Furthermore, it must coincide with these RESERVATION DATES..."
              />
              {chechBox.box4 && <Calendar />}
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
          Create new offer: Step 3 of 7 ( Rooms and Board )
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

  console.log("rateForm[0].name", rateForm[0].name);
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

  const [data1, setData1] = React.useState("%");
  const [checked1, setChecked1] = React.useState(false);
  const [data2, setData2] = React.useState("");
  const [data3, setData3] = React.useState("");
  const [data4, setData4] = React.useState("%");
  const [data5, setData5] = React.useState("");
  const [data6, setData6] = React.useState("");
  const [data7, setData7] = React.useState("");
  const [data8, setData8] = React.useState(false);

  const handleChange1 = (event) => {
    setChecked1(event.target.checked);
  };

  const handleChange = (event) => {
    setData1(event.target.value);
  };
  const handleChange2 = (event) => {
    setData2(event.target.value);
  };
  const handleChange3 = (event) => {
    setData3(event.target.value);
  };
  const handleChange4 = (event) => {
    setData4(event.target.value);
  };
  const handleChange5 = (event) => {
    setData5(event.target.value);
  };
  const handleChange6 = (event) => {
    setData6(event.target.value);
  };
  const handleChange7 = (event) => {
    setData7(event.target.value);
  };

  const handleChange8 = (event) => {
    setData8(event.target.checked);
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
          Create new offer: Step 4 of 7 (Rate)
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className="row my-3">
          <div className="row ms-1 w-100">
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={rateForm[0].name}
              //   onChange={handleChange}
            >
              <FormControlLabel
                style={{ width: 500 }}
                value="Regular"
                control={<Radio />}
                label="Same price as the regular rate"
                onClick={() => handleRateForm("Regular", "Radio", 1)}
              />
              <FormControlLabel
                value="Fixed"
                control={<Radio />}
                label="Fixed"
                onClick={() => handleRateForm("Fixed", "Radio", 2)}
              />
              {rateForm[0].name === "Fixed" && (
                <div>
                  <div>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={rateForm[2].isDaysView}
                          onChange={() =>
                            handleRateForm(
                              "Fixed",
                              "Radio",
                              2,
                              rateForm[2].isDaysView
                            )
                          }
                          name="checkedB"
                          color="primary"
                        />
                      }
                      label="Different price on each day of the week"
                    />
                  </div>
                  {rateForm[2].isDaysView ? (
                    <div>
                      {rateForm[2].section.map((item1, index) => {
                        return (
                          <div className="row my-3 d-flex align-items-center">
                            <div className="col">{item1.description}</div>
                            <div className="row col">
                              {item1.daysView.map((item2, index) => {
                                console.log("item2", item2);
                                return (
                                  <div className="col d-flex flex-column">
                                    <span className="text-center py-1 fw-bold">
                                      {item2.day}
                                    </span>
                                    <span>
                                      <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        size="small"
                                        value={
                                          item2.value === 0 ? "" : item2.value
                                        }
                                        onChange={(text) =>
                                          console.log("DAta", text.target.value)
                                        }
                                      />
                                    </span>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div>
                      {rateForm[2].section.map((item1, index) => {
                        return (
                          <div
                            key={index}
                            className="row my-3 d-flex align-items-center"
                          >
                            <div className="col">{item1.description}</div>
                            <div className="col">
                              <TextField
                                id="outlined-basic"
                                variant="outlined"
                                size="small"
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
              <FormControlLabel
                value="Discount"
                control={<Radio />}
                label="Discount"
                onClick={() => handleRateForm("Discount", "Radio", 3)}
              />
              {rateForm[0].name === "Discount" && (
                <div className="row">
                  <div className="col">Discount:</div>
                  <div className="col">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      size="small"
                    />
                  </div>
                  <div className="col">
                    <FormControl>
                      <Select
                        native
                        // value={discountSelectedValue}
                        value={data1}
                        onChange={handleChange}
                      >
                        {/* {rateForm[3].list.map((item1, index) => {
                          return (
                            <option
                              key={index}
                              value={item1.label}
                              onClick={() =>
                                handleRateForm(
                                  "Discount",
                                  "Radio",
                                  3,
                                  "dropdown-1",
                                  index
                                )
                              }
                            >
                              {item1.label}
                            </option>
                          );
                        })} */}
                        <option value={"%"}>%</option>
                        <option value={"AED"}>AED</option>
                      </Select>
                    </FormControl>
                  </div>

                  <div className="col">per room per night</div>
                </div>
              )}
            </RadioGroup>
            {rateForm[0].name === "Discount" ? (
              data1 === "%" ? (
                <div>
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
              ) : (
                <div></div>
              )
            ) : null}
          </div>

          <div>
            <Checkbox
              checked={checked1}
              onChange={handleChange1}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            Increment
          </div>
          {checked1 && (
            <div className="row ms-5">
              <div className="col-auto">
                <Select
                  native
                  // value={discountSelectedValue}
                  value={data2}
                  onChange={handleChange2}
                >
                  <option value={"per person"}>per person</option>
                  <option value={"per room"}>per room</option>
                </Select>
              </div>
              <div className="col-auto">
                <Select
                  native
                  // value={discountSelectedValue}
                  value={data3}
                  onChange={handleChange3}
                >
                  <option value={"once"}>once</option>
                  <option value={"per night"}>per night</option>
                </Select>
              </div>

              {data2 === "per room" ? (
                <div className="col-auto">
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    style={{ width: 100 }}
                    className="ms-3"
                  />
                </div>
              ) : (
                <>
                  <div className="col-auto">
                    Per Adult
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      size="small"
                      style={{ width: 100 }}
                      className="ms-3"
                    />
                  </div>

                  <div className="col-auto">
                    per child
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      size="small"
                      style={{ width: 100 }}
                      className="ms-3"
                    />
                  </div>
                </>
              )}
              <div className="col-auto">
                <Select
                  native
                  // value={discountSelectedValue}
                  value={data4}
                  onChange={handleChange4}
                >
                  <option value={"%"}>%</option>
                  <option value={"AED"}>AED</option>
                </Select>
              </div>
            </div>
          )}

          <div>
            <Checkbox
              checked={data8}
              onChange={handleChange8}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            One free night for every X nights booked... (It also applies to meal
            plan supplements, if they exist)
          </div>
          {data8 ? (
            <div className="row ms-5">
              <RadioGroup
                aria-label="gender"
                name="gender1"
                value={data7}
                onChange={handleChange7}
              >
                <div className="row">
                  <div className=" col-auto">
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Last night free for every"
                    />
                  </div>
                  <div className="col-auto">
                    <Select
                      native
                      // value={discountSelectedValue}
                      value={data5}
                      onChange={handleChange5}
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
                  booked nights
                </div>

                <div className="row ">
                  <div className="col-auto">
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Cheapest night free out of"
                    />
                  </div>
                  <div className="col-auto">
                    <Select
                      native
                      // value={discountSelectedValue}
                      value={data6}
                      onChange={handleChange6}
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
                  booked nights
                </div>
              </RadioGroup>
            </div>
          ) : null}

          <div className="ms-2 ">
            <ExtraDiscount />
          </div>
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
          Create new offer: Step 5 of 7 ( Restrictions )
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className="row my-3">
          <div>
            <Checkbox
              checked={checked1}
              onChange={handleChange1}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <span>
              Only available for users with a corporate / promotional code
            </span>
          </div>
          {checked1 && (
            <div className="ms-5">
              * Important: For this to work, in "Client Codes", you should have
              created the codes and they need to be associated to this
              offer/rate.
            </div>
          )}
          <div>
            <Checkbox
              checked={checked2}
              onChange={handleChange2}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <span>Advanced booking</span>
          </div>
          {checked2 && (
            <div>
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                style={{ width: 100 }}
                className="ms-3"
              />
              <span className="ms-2">Day/s in advance</span>
            </div>
          )}
          <div>
            <Checkbox
              checked={checked3}
              onChange={handleChange3}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <span>Different payment or cancellation policy</span>
          </div>
          <div>
            <Checkbox
              checked={checked4}
              onChange={handleChange4}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <span>Minimum stay</span>
          </div>
          {checked4 && (
            <div className="ms-5">
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
              Night/s
            </div>
          )}
          <div>
            <Checkbox
              checked={checked5}
              onChange={handleChange5}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <span>Maximum stay</span>
          </div>
          {checked5 && (
            <div className="ms-5">
              <div>
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
                Night/s
              </div>
              <div>
                <RadioGroup
                  aria-label="gender"
                  name="gender1"
                  value={radio1}
                  onChange={handleRadio}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="For more nights, the offer will be offered the number of nights indicated here"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="For more nights, the offer will not be offered"
                  />
                </RadioGroup>
              </div>
            </div>
          )}
          <div>
            <Checkbox
              checked={checked6}
              onChange={handleChange6}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <span>Minimum number of rooms of the offer per booking</span>
            {checked6 && (
              <span className="mx-3">
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
                Rooms
              </span>
            )}
          </div>
          <div>
            <Checkbox
              checked={checked7}
              onChange={handleChange7}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <span>Close the offer when there are few available rooms</span>
            {checked7 && (
              <span className="mx-3">
                :=> Close the offer when there are less than
                <Select
                  native
                  // value={discountSelectedValue}
                  // value={drop1}
                  // onChange={handleDrop1}
                  className="mx-3"
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
                rooms in inventory available
              </span>
            )}
          </div>
          <div>
            <Checkbox
              checked={checked8}
              onChange={handleChange8}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <span>
              Maximum quantity of rooms per night at this offer (all the
              reservations considered).
            </span>
            {checked8 && (
              <span>
                <Select
                  native
                  // value={discountSelectedValue}
                  // value={drop1}
                  // onChange={handleDrop1}
                  className="mx-3"
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
              checked={checked9}
              onChange={handleChange9}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <span>Last minute</span>
            {checked9 && (
              <span>
                Only activate the offer when less than 12 hours until
                <Select
                  native
                  // value={discountSelectedValue}
                  // value={drop1}
                  // onChange={handleDrop1}
                  className="mx-3"
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
                noon of the arrival date
              </span>
            )}
          </div>
          <div>
            <Checkbox
              checked={checked10}
              onChange={handleChange10}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <span>Display only at night / weekend</span>
          </div>
          {checked10 && (
            <div>
              <div className="ms-5">
                <span>From </span>
                <span>
                  <Select
                    native
                    // value={discountSelectedValue}
                    // value={drop1}
                    // onChange={handleDrop1}
                    className="mx-3"
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
                <span className="mx-3">:00 To</span>
                <span>
                  <Select
                    native
                    // value={discountSelectedValue}
                    // value={drop1}
                    // onChange={handleDrop1}
                    className="mx-3"
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
                <span className="mx-1">:00 </span>
              </div>
              <div className="ms-5">
                <Checkbox
                  checked={checked14}
                  onChange={handleChange14}
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
                <span>Weekends: from friday at 8 pm to monday at 8 am</span>
              </div>
            </div>
          )}
          <div>
            <Checkbox
              checked={checked11}
              onChange={handleChange11}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <span>Only avaliable for a certain type of guest</span>
          </div>
          {checked11 && (
            <div className="ms-5">
              <div>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  style={{ width: 800 }}
                  className="ms-3"
                />
              </div>
              <span className="ms-5">
                (eg.: pensioners, children, newborns, event assistants...)
              </span>
            </div>
          )}
          <div>
            <Checkbox
              checked={checked12}
              onChange={handleChange12}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <span>Apply only to these countries:</span>
          </div>
          <div>
            <Checkbox
              checked={checked13}
              onChange={handleChange13}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <span>Only on this device type</span>
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

const Step6 = () => {
  const classes = useStyles();

  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);
  const [checked4, setChecked4] = React.useState(false);
  const [checked5, setChecked5] = React.useState(false);
  const [checked6, setChecked6] = React.useState(false);
  const [checked7, setChecked7] = React.useState(false);

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

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        className="shadow rounded"
      >
        <Typography variant="h2" className="fs-6 fw-bold ">
          Create new offer: Step 6 of 7 ( What does it include? )
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className="row my-3">
          <div>
            <Checkbox
              checked={checked1}
              onChange={handleChecked1}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <span>Airport Pick Up - Dubai Airport (3 Adults & 4 Bags)</span>
          </div>
          <div>
            <Checkbox
              checked={checked2}
              onChange={handleChecked2}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <span>Airport Pick Up - Sharjah Airport (3 Adults & 4 Bags)</span>
          </div>
          <div>
            <Checkbox
              checked={checked3}
              onChange={handleChecked3}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <span>Airport Pick Up - Sharjah Airport (3 Adults & 4 Bags)</span>
          </div>
          <div>
            <Checkbox
              checked={checked4}
              onChange={handleChecked4}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <span>Free Baby cot</span>
          </div>
          <div>
            <Checkbox
              checked={checked5}
              onChange={handleChecked5}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <span>Free beach shuttle</span>
          </div>
          <div>
            <Checkbox
              checked={checked6}
              onChange={handleChecked6}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <span>Free Beach Shuttle</span>
          </div>
          <div>
            <Checkbox
              checked={checked7}
              onChange={handleChecked7}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <span>30 Minutes Back Massage</span>
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

const OfferListing = () => {
  return (
    <div className="">
      {OfferList.map((item) => {
        return (
          <Paper style={{ width: "auto" }} className="p-3 my-2 row">
            <div className="col">
              <Typography color="primary" className="fw-bold">
                {item.name}
              </Typography>
              <Typography variant="p">{item.discription}</Typography>
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

const OffersPage = () => {
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
            Add Offer
          </Button>
        </div>
      )}
      {isAdd ? <OfferAddSteps /> : <OfferListing />}
    </div>
  );
};

export default OffersPage;
