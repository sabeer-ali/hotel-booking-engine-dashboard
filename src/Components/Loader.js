import React from "react";
import Loader from "react-js-loader";
import "../styles/LoaderStyle.css";

export const CustomLoader = () => (
  <div className="custom-loader">
    <Loader type="spinner-cub" bgColor={"#f0f"} size={30} />
  </div>
);
