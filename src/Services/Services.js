import React from "react";
import axios from "axios";
import { BaseUrl } from "../Config/env";
import { Types, getLocalData } from "../Utils/localStore";

class CommonService {
  static post(url, data, callback) {
    console.log("Called POST");
    axios({
      method: "post",
      baseURL: BaseUrl,
      url: url,
      data: data,
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        console.log(`${url} res ==>", ${res}`);
        callback(null, res);
      })
      .catch((err) => {
        console.error(`${url} Res ERROR ==>  ${err.response}`);
        callback("error", err.response.data);
      });
  }

  static get(url, callback) {
    console.log("Called Get");

    getLocalData(Types.LOGIN_DETAILS).then((res, err1) => {
      if (res !== null) {
        axios({
          method: "get",
          baseURL: BaseUrl,
          url: url,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${res.data.token}`,
          },
        })
          .then((res) => {
            console.log(`${url} res ==>",`);
            console.log(res);
            callback(res.data, null);
          })
          .catch((err) => {
            console.error(`${url} Res ERROR ==>  ${err.response}`);
            callback(err.response.data, true);
          });
      }
    });
  }
}

const registerService = (method, url, data, callback) => {
  axios({
    method: method,
    baseURL: BaseUrl,
    url: url,
    data: data,
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => {
      console.log(`${url} res ==>", ${res}`);
      callback(null, res);
    })
    .catch((err) => {
      console.error(`${url} Res ERROR ==>  ${err.response}`);
      callback("error", err.response.data);
    });
};

export { CommonService, registerService };
