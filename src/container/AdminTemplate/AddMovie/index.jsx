import React from "react";
import { Formik, Form } from "formik";
import { Link, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import addMovie from "./modules/action";
import moment from "moment";

function AddMovie(props) {
  const dispatch = useDispatch();

  const handleAddMovie = (movie) => {
    dispatch(addMovie(movie, props.history));
    console.log(dateShow);
  };

  const [dateShow, setDateShow] = React.useState("");
  if(!sessionStorage.getItem("Adminlogin")) {
    return <Redirect to="/auth" />
  }
  return (
    <div className="add__movie">
      <div className="form__add__movie">
        <h3 className="mb-4">Thêm phim</h3>
        <Formik
          onSubmit={handleAddMovie}
          initialValues={{
            maPhim: 0,
            tenPhim: "",
            biDanh: "",
            trailer: "",
            hinhAnh: "",
            moTa: "",
            maNhom: "GP01",
            ngayKhoiChieu: dateShow,
            danhGia: 0,
          }}

          render={(fomiks) => (
            <Form>
              <div className="form-group">
                <div className="label">
                  <span>Mã phim:</span>
                </div>
                <input
                  type="text"
                  placeholder="Mã phim"
                  name="maPhim"
                  disabled
                />
              </div>
              <div className="form-group">
                <div className="label">
                  <span>
                    <span className="text-danger">*</span>Tên phim:
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Nhập tên phim"
                  name="tenPhim"
                  onChange={fomiks.handleChange}
                />
              </div>
              <div className="form-group">
                <div className="label">
                  <span>
                    {" "}
                    <span className="text-danger">*</span>Bí danh:
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Nhập bí danh"
                  name="biDanh"
                  onChange={fomiks.handleChange}
                />
              </div>
              <div className="form-group">
                <div className="label">
                  <span>
                    {" "}
                    <span className="text-danger">*</span>Trailer:
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Thêm trailer"
                  name="trailer"
                  onChange={fomiks.handleChange}
                />
              </div>
              <div className="form-group">
                <div className="label">
                  {" "}
                  <span>
                    {" "}
                    <span className="text-danger">*</span>Hình ảnh:
                  </span>
                </div>
                <input
                  type="file"
                  accept="image/png, image/jpeg"
                  name="hinhAnh"
                  onChange={fomiks.handleChange}
                />
              </div>
              <div className="form-group">
                <div className="label">
                  <span>
                    {" "}
                    <span className="text-danger">*</span>Mô tả:
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Thêm mô tả phim"
                  name="moTa"
                  onChange={fomiks.handleChange}
                />
              </div>
              <div className="form-group">
                <div className="label">
                  <span>
                    {" "}
                    <span className="text-danger">*</span>Ngày khởi chiếu:
                  </span>
                </div>
                <input
                  type="date"
                  name="ngayKhoiChieu"
                  // onChange={fomiks.handleChange}
                  onChange={(date) => {
                    const getDate = moment(date.target.value).format(
                      "DD/MM/yyyy"
                    );
                    setDateShow(getDate);
                  }}
                />
              </div>
              <div className="action d-flex justify-content-between mt-4">
                <Link to="/movie-manager">
                  <button className="btn btn-primary d-block">Trở lại</button>
                </Link>
                <button type="submit" className="btn btn-success d-block">
                  Đồng ý
                </button>
              </div>
            </Form>
          )}
        />
      </div>
    </div>
  );
}

export default AddMovie;
