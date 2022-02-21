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
import { NavLink } from "react-router-dom";
import Logo from "../../assets/web-logo.png";
import { Formik, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import { fecthLogin } from "./modules/action";
import { connect } from "react-redux";
import { fecthDetailUser } from "../../components/LayoutAdmin/TableUser/modules/action";

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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Login(props) {
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = (data) => {
    props.dispatch(fecthLogin(data, props.history));
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    props.dispatch(fecthDetailUser(data));
  };

  //Validation form
  const signInSchema = yup.object().shape({
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
  const classes = useStyles();

  return (
    <div className="form-login">
      <Container className="content" component="main" maxWidth="xs">
        <CssBaseline />
        <div className="position-relative pt-4">
          <div className={classes.paper}>
            <NavLink exact to="/" className="cancel-login">
              x
            </NavLink>
            <Avatar className={classes.avatar}>
              <img src={Logo} width={40} alt="" />
            </Avatar>
            <Typography component="h1" variant="h5">
              Đăng nhập
            </Typography>
            <Formik
              initialValues={{ taiKhoan: "", matKhau: "" }}
              validationSchema={signInSchema}
              onSubmit={handleSubmit}
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
                  <br />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Ghi nhớ đăng nhập"
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    disabled={isLoading}
                  >
                    {isLoading && <span className="loader mr-3"></span>}
                    Đăng nhập
                  </Button>

                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Quên mật khẩu?
                      </Link>
                    </Grid>
                    <Grid item>
                      Chưa có tài khoản?
                      <NavLink to="/sign-up" variant="body2">
                        {"Đăng ký ngay"}
                      </NavLink>
                    </Grid>
                  </Grid>
                </Form>
              )}
            />
          </div>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}

// const mapStateToProps = state => {
//   return {
//     loading: state.logInReducer.loading,
//   }
// }

export default connect()(Login);
