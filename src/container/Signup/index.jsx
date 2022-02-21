import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Logo from "../../assets/web-logo.png";
import { NavLink } from "react-router-dom";
import { Formik, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import fetchSignUp from "./modules/action";
import { connect } from "react-redux";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignUp(props) {
  const classes = useStyles();

  const handleOnSubmit = (values) => {
    props.dispatch(fetchSignUp(values, props.history));
  };

  const signUpSchema = yup.object().shape({
    taiKhoan: yup
      .string()
      .required("*Vui lòng nhập đầy đủ thông tin")
      .min(3, "*Tài khoản phải có ít nhất 3 kí tự"),
    matKhau: yup
      .string()
      .required("*Vui lòng nhập đầy đủ thông tin")
      .min(3, "*Mật khẩu từ 3 đến 12 kí tự")
      .max(12, "*Mật khẩu phải từ 3 đến 12 kí tự"),
    hoTen: yup
      .string()
      .required("*Vui lòng nhập đầy đủ thông tin")
      .min(3, "*Vui lòng nhập đầy đủ thông tin"),
    email: yup
      .string()
      .required("*Vui lòng nhập đầy đủ thông tin")
      .email("*Email không đúng định dạng"),
    soDt: yup
      .string()
      .required("*Vui lòng nhập đầy đủ thông tin")
      .matches(/^[0-9]+$/, "*Số điện thoại không hợp lệ")
      .min(10, "*Số điện thoại không hợp lệ")
      .max(10, "*Số điện thoại không hợp lệ"),
  });

  return (
    <div className="sign-up position-relative">
      <Container className="form-content" component="main" maxWidth="xs">
        <CssBaseline />
        <div className="position-relative pt-4">
          <div className={classes.paper}>
            <NavLink exact to="/" className="cancel-signup">
              x
            </NavLink>
            <Avatar className={classes.avatar}>
              <img src={Logo} width={40} alt="" />
            </Avatar>
            <Typography component="h1" variant="h5">
              Đăng ký
            </Typography>
            <Formik
              initialValues={{
                taiKhoan: "",
                matKhau: "",
                email: "",
                soDt: "",
                maNhom: "GP01",
                hoTen: "",
              }}
              validationSchema={signUpSchema}
              onSubmit={handleOnSubmit}
              render={(formikProps) => (
                <Form className={classes.form} noValidate>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        autoComplete="hoTen"
                        name="hoTen"
                        variant="outlined"
                        required
                        fullWidth
                        id="hoTen"
                        label="Họ Tên"
                        autoFocus
                        onChange={formikProps.handleChange}
                      />
                      <ErrorMessage name="hoTen">
                        {(msg) => <div className="custom-err">{msg}</div>}
                      </ErrorMessage>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="taiKhoan"
                        label="Tài khoản"
                        name="taiKhoan"
                        autoComplete="taiKhoan"
                        onChange={formikProps.handleChange}
                      />
                      <ErrorMessage name="taiKhoan">
                        {(msg) => <div className="custom-err">{msg}</div>}
                      </ErrorMessage>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
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
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="email"
                        label="Email"
                        type="email"
                        id="email"
                        onChange={formikProps.handleChange}
                      />
                      <ErrorMessage name="email">
                        {(msg) => <div className="custom-err">{msg}</div>}
                      </ErrorMessage>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="soDt"
                        label="Số điện thoại"
                        type="text"
                        id="soDt"
                        onChange={formikProps.handleChange}
                      />
                      <ErrorMessage name="soDt">
                        {(msg) => <div className="custom-err">{msg}</div>}
                      </ErrorMessage>
                    </Grid>
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={
                          <Checkbox value="allowExtraEmails" color="primary" />
                        }
                        label="Nhận thông báo và các ưu đãi mới nhất "
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    disabled={props.loading}
                    className={classes.submit}
                  >
                    {props.loading && <span className="loader mr-3"></span>}
                    Đăng ký
                  </Button>
                  <Grid container justify="flex-end">
                    <Grid item>
                      Đã có tài khoản?
                      <NavLink to="/login">Đăng nhập ngay</NavLink>
                    </Grid>
                  </Grid>
                </Form>
              )}
            />
          </div>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { loading: state.signUpReducer.loading };
};

export default connect(mapStateToProps)(SignUp);
