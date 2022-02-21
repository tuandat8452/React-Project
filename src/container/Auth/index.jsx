import React from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Formik, Form, ErrorMessage } from "formik";
import fecthAuth from "./modules/action";
import * as yup from "yup";
import { connect } from "react-redux";

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
}));

function Auth(props) {
  const classes = useStyles();

  const handleSubmitAuth = (data) =>{
    props.dispatch(fecthAuth(data, props.history));

  }
  const authSchema = yup.object().shape({
    taiKhoan: yup
      .string()
      .required("*Tài khoản không được bỏ trống")
      .min(3, "*Tài khoản phải có ít nhất 3 kí tự"),
    matKhau: yup
      .string()
      .required("*Mật khẩu không được để trống")
      .min(3, "*Mật khẩu từ 3 đến 12 kí tự")
      .max(12, "*Mật khẩu phải từ 3 đến 12 kí tự"),
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Đăng nhập admin
        </Typography>
        <Formik
        validationSchema={authSchema}
          initialValues={{
            taiKhoan: "",
            matKhau: "",
          }}
          onSubmit={handleSubmitAuth}
          render={(formikProps) => (
            <Form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="taiKhoan"
                label="Tài khoản"
                name="taiKhoan"
                autoComplete="taiKhoan"
                autoFocus
                onChange={formikProps.handleChange}
              />
              <ErrorMessage name="taiKhoan">
                    {(msg) => <div className="custom-err">{msg}</div>}
                  </ErrorMessage>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="matKhau"
                label="Mật khẩu"
                type="password"
                id="matKhau"
                autoComplete="current-password"
                onChange={formikProps.handleChange}
              />
              <ErrorMessage name="matKhau">
                    {(msg) => <div className="custom-err">{msg}</div>}
                  </ErrorMessage>
              {/* <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                /> */}
              <button
                type="submit"
                className="btn btn-success d-block mt-4"
                style={{ width: "100%" }}
              >
                Đăng nhập
              </button>
            </Form>
          )}
        />
      </div>
    </Container>
  );
}

export default connect()(Auth);
