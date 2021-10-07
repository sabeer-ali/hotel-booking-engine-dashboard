import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import TableCell from "@material-ui/core/TableCell";
import { useHistory } from "react-router-dom";

import React, { useState, useEffect } from "react";
import { CommonService } from "../Services/Services";
import { HOTEL_LIST } from "../Services/Urls";
import "./style.css";
import { storeLocalData } from "../Utils/localStore";

const HotelListingPage = () => {
  const history = useHistory();
  const [hotelList, setHotelList] = useState([]);

  useEffect(() => {
    getHotelList();
  }, []);

  const getHotelList = () => {
    CommonService.get(HOTEL_LIST, (res, err) => {
      console.log(res, err);
      if (err) {
      } else {
        setHotelList(res.data.hotels);
      }
    });
  };

  const handleDetails = (value) => {
    console.log("Valll", value);
    storeLocalData("selected_hotel", value);
    history.push({
      pathname: "/dashboard",
      state: { value },
    });
  };

  return (
    <div className="container px-5 mt-5">
      <table class="table table-striped table-hover mt-5">
        <thead>
          <tr>
            <th scope="col">Hotel ID</th>
            <th scope="col">Hotel Name</th>
            <th scope="col">Hotel Address</th>
          </tr>
        </thead>
        <tbody>
          {hotelList.length
            ? hotelList.map((item) => (
                <tr onClick={() => handleDetails(item)} className="py-5">
                  <td>{item.hotel_id}</td>
                  <td>{item.name}</td>
                  <td>{item.address}</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default HotelListingPage;
