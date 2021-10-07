import React from "react";
import { CustomAlert } from "../Components/CustomAlert";
import { CustomLoader } from "../Components/Loader";
import { registerService } from "../Services/Services";
import { REGISTER } from "../Services/Urls";
import { useHistory } from "react-router-dom";

const RegisterPage = () => {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [formError, setFormError] = React.useState({
    msg: "",
    isError: false,
    code: 0,
  });

  const [isLoader, setLoader] = React.useState(false);
  const [alertDetails, setAlertDetails] = React.useState({
    type: "",
    message: "",
    visible: false,
  });

  const history = useHistory();

  const Validation = () => {
    let err = {
      msg: "",
      isError: false,
      code: 0,
    };

    if (form.name.trim() === "") {
      err.msg = "Name Cannot Be Empty.";
      err.isError = true;
      err.code = 1;
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email)
    ) {
      err.msg = "Email Id is Invalid.";
      err.isError = true;
      err.code = 2;
    } else if (form.password.trim() === "") {
      err.msg = "password Field Cannot Be Empty.";
      err.isError = true;
      err.code = 3;
    } else if (form.password_confirmation.trim() === "") {
      err.msg = "Confirm password Field Cannot Be Empty.";
      err.isError = true;
      err.code = 4;
    } else if (!checkConfirmPassword()) {
      err.msg = "password and Confirm Password Didn't match.";
      err.isError = true;
      err.code = 5;
    }

    setFormError(err);
    return err.isError;
  };

  const handleFormData = (data, field) => {
    let temp = { ...form };
    temp[field] = data;
    setForm(temp);
  };

  const checkConfirmPassword = () => {
    return form.password === form.password_confirmation ? true : false;
  };

  const onSubmit = () => {
    if (!Validation()) {
      setLoader(true);
      registerService("post", REGISTER, form, (errCode, data) => {
        setLoader(false);
        console.log("003", errCode, data);
        if (errCode) {
          setAlertDetails({
            type: "error",
            message: data,
            visible: true,
          });
        } else {
          setAlertDetails({
            type: "success",
            message: "Successfully Registered.!",
            visible: true,
          });
          setTimeout(() => {
            history.push("/");
          }, 4200);
        }
      });
    }
  };

  return (
    <div
      className="container w-100 d-flex justify-content-center align-items-center"
      style={{ height: "100%" }}
    >
      {isLoader ? (
        <CustomLoader />
      ) : (
        <div className="container w-50">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={form.name}
              onChange={(event) => handleFormData(event.target.value, "name")}
            />
          </div>
          {formError.code === 1 ? (
            <span className="text-danger py-2">{formError.msg}</span>
          ) : null}
          <div className="mb-3">
            <label htmlFor="emailId" className="form-label">
              Email ID
            </label>
            <input
              type="email"
              className="form-control"
              id="emailId"
              value={form.email}
              onChange={(event) => handleFormData(event.target.value, "email")}
            />
            {formError.code === 2 ? (
              <span className="text-danger py-2">{formError.msg}</span>
            ) : null}
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={form.password}
              onChange={(event) =>
                handleFormData(event.target.value, "password")
              }
            />
            {formError.code === 3 || formError.code === 5 ? (
              <span className="text-danger py-2">{formError.msg}</span>
            ) : null}
          </div>
          <div className="mb-3">
            <label htmlFor="cPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="cPassword"
              value={form.password_confirmation}
              onChange={(event) =>
                handleFormData(event.target.value, "password_confirmation")
              }
            />
            {formError.code === 4 || formError.code === 5 ? (
              <span className="text-danger py-2">{formError.msg}</span>
            ) : null}
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => onSubmit()}
          >
            Submit
          </button>
          {alertDetails.visible ? (
            <CustomAlert
              type={alertDetails.type}
              message={alertDetails.message}
            />
          ) : null}
        </div>
      )}
    </div>
  );
};

export default RegisterPage;
