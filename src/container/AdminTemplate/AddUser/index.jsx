import React from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Redirect } from "react-router";
import Logo from "../../../assets/Dashboard/logo.png";
import { Formik, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import Select from "@material-ui/core/Select";
import { FormControl, InputLabel, MenuItem } from "@material-ui/core";
import actAddUser from "./modules/action";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
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

function AddUser(props) {
  const classes = useStyles();

  const handleOnSubmit = (user) => {
    props.dispatch(actAddUser(user, props.history));
    // console.log(user);
  };

  if (!sessionStorage.getItem("Adminlogin")) {
    return <Redirect to="/auth" />;
  }
  return (
    <div className="add__user">
      <Container className="form-content" component="main" maxWidth="xs">
        <CssBaseline />
        <div className="form__add_user">
          <Avatar className={classes.avatar}>
            <img src={Logo} width={40} alt="" />
          </Avatar>
          <Typography component="h1" variant="h5">
            THÊM NGƯỜI DÙNG
          </Typography>
          <Formik
            initialValues={{
              taiKhoan: "",
              matKhau: "",
              email: "",
              soDt: "",
              maNhom: "GP01",
              hoTen: "",
              maLoaiNguoiDung: "",
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
                </Grid>
                <div className="loai__user mt-3">
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      Loại người dùng (*)
                    </InputLabel>
                    <Select
                      name="maLoaiNguoiDung"
                      label="Loại người dùng (*)"
                      onChange={formikProps.handleChange}
                    >
                      <MenuItem value="KhachHang">Khách Hàng</MenuItem>
                      <MenuItem value="QuanTri">Quản trị</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div className=" mt-3 d-flex justify-content-between">
                  <Link to="/user-manager">
                    <button type="button" className="btn btn-danger">
                      Trở lại
                    </button>
                  </Link>
                  <button type="submit" className="btn btn-success">
                    Thêm
                  </button>
                </div>
              </Form>
            )}
          />
        </div>
      </Container>
    </div>
  );
}
export default connect()(AddUser);
