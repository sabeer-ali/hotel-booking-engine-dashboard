import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { storeLocalData, Types } from "../Utils/localStore";
import { CommonService, registerService } from "../Services/Services";
import { LOGIN } from "../Services/Urls";
import { CustomAlert } from "../Components/CustomAlert";
import { CustomLoader } from "../Components/Loader";
import { Link, useHistory } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}

      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const history = useHistory();

  const [form, setForm] = useState({ userName: "", password: "" });
  const handleForm = (text, field) => {
    let temp = { ...form };
    temp[field] = text;
    setForm(temp);
  };
  const [validationErr, setValidationErr] = useState({
    code: 0,
    msg: "",
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoader, setLoader] = React.useState(false);
  const [alertDetails, setAlertDetails] = React.useState({
    type: "",
    message: "",
    visible: false,
  });

  const validation = () => {
    let valErr = { ...validationErr };
    if (form.userName.trim() === "") {
      valErr.code = 1;
      valErr.msg = "Username is Invalid.";
    } else if (form.password.trim() === "") {
      valErr.code = 2;
      valErr.msg = "Username is Invalid.";
    } else {
      valErr.code = 0;
      valErr.msg = "";
    }

    setValidationErr(valErr);
    return valErr.code === 0 && true;
  };

  const loginApi = () => {
    let payload = {
      email: form.userName,
      password: form.password,
    };
    setLoader(true);
    CommonService.post(LOGIN, payload, (errCode, data) => {
      setLoader(false);

      if (errCode) {
        setAlertDetails({
          type: "error",
          message: JSON.stringify(data),
          visible: true,
        });
      } else {
        setAlertDetails({
          type: "success",
          message: JSON.stringify(data),
          visible: true,
        });
        storeLocalData(Types.LOGIN_DETAILS, data.data).then((res, err) => {
          if (res != null) {
            history.push("/hotel-list");
          }
        });
      }
    });
  };

  const onSubmit = () => {
    if (validation()) {
      if (rememberMe) {
        console.log("Here");
        storeLocalData(Types, form).then((res, err) => {
          if (err) {
            console.error("Local Data Set Error===>", res);
          } else if (res) {
            loginApi();
          }
        });
      } else {
        loginApi();
      }
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <div className={classes.form} noValidate>
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoFocus
            value={form.userName}
            onChange={(event) => handleForm(event.target.value, "userName")}
          />
          {validationErr.code === 1 ? (
            <span className="text-danger">{validationErr.msg}</span>
          ) : null}
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={form.password}
            onChange={(event) => handleForm(event.target.value, "password")}
          />
          {validationErr.code === 2 ? (
            <div className="text-danger">{validationErr.msg}</div>
          ) : null}
          <FormControlLabel
            control={
              <Checkbox
                value="remember"
                color="primary"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
            }
            label="Remember me"
          />
          {isLoader ? (
            <CustomLoader />
          ) : (
            <>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={() => onSubmit()}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  {/* <Link to="#">Forgot password?</Link> */}
                </Grid>
                <Grid item>
                  <Link to="/register">Don't have an account? Sign Up</Link>
                </Grid>
              </Grid>
            </>
          )}
        </div>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
      {alertDetails.visible ? (
        <CustomAlert type={alertDetails.type} message={alertDetails.message} />
      ) : null}
    </Container>
  );
}
