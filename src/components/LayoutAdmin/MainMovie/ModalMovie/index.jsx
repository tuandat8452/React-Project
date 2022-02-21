import React, { Component } from "react";
import { Formik, Form } from "formik";
import actupdateMovie from "./modules/action";
import moment from "moment";
import Fade from 'react-reveal/Fade';

class ModalMovie extends Component {
  state = {
    edit: {},
  };

  static getDerivedStateFromProps(props, state) {
    if (props.infoMovie !== state.edit) {
      return {
        edit: props.infoMovie,
      };
    }
    return null;
  }

  updateMovie = (movie) => {
    this.props.dispatch(actupdateMovie(movie));
    console.log(movie);
  };

  render() {
    const { edit } = this.state;
    return (
      <Fade top>
      <div className="modal" id="movieModal">
        <div className="modal-dialog">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h4 className="modal-title">Cập nhật người dùng</h4>
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>
            {/* Modal body */}
            <div className="modal-body">
              <Formik
                onSubmit={this.updateMovie}
                initialValues={{
                  maPhim: edit.maPhim,
                  tenPhim: edit.tenPhim,
                  biDanh: edit.biDanh,
                  trailer: edit.trailer,
                  ngayKhoiChieu: moment(
                    new Date(edit.ngayKhoiChieu).getDay() +
                      "/" +
                      (new Date(edit.ngayKhoiChieu).getMonth() + 1) +
                      "/" +
                      new Date(edit.ngayKhoiChieu).getFullYear()
                  ).format("DD/MM/yyyy"),
                  moTa: edit.moTa,
                  hinhAnh: edit.hinhAnh,
                  maNhom: "GP01",
                  danhGia: 0,
                }}
                enableReinitialize={true}
                render={(formik) => (
                  <Form>
                    <div className="form-group">
                      <label>Mã phim</label>
                      <br />
                      <input
                        type="text"
                        defaultValue={edit.maPhim}
                        onChange={formik.handleChange}
                        name="maPhim"
                        disabled
                      />
                    </div>
                    <div className="form-group">
                      <label>Tên phim</label>
                      <br />
                      <input
                        type="text"
                        defaultValue={edit.tenPhim}
                        onChange={formik.handleChange}
                        name="tenPhim"
                      />
                    </div>
                    <div className="form-group">
                      <label>Bí danh :</label>
                      <br />
                      <input
                        type="text"
                        defaultValue={edit.biDanh}
                        onChange={formik.handleChange}
                        name="biDanh"
                      />
                    </div>
                    <div className="form-group">
                      <label>Trailer:</label>
                      <br />
                      <input
                        type="text"
                        defaultValue={edit.trailer}
                        onChange={formik.handleChange}
                        name="trailer"
                      />
                    </div>
                    <div className="form-group">
                      <label>Hình ảnh:</label>
                      <br />
                      <input
                        type="text"
                        defaultValue={edit.hinhAnh}
                        onChange={formik.handleChange}
                        name="hinhAnh"
                      />
                    </div>
                    <div className="form-group">
                      <label>Mô tả:</label>
                      <br />
                      <input
                        type="text"
                        defaultValue={edit.moTa}
                        onChange={formik.handleChange}
                        name="moTa"
                      />
                    </div>
                    <div className="form-group">
                      <label>Ngày khởi chiếu:</label>
                      <br />
                      <input
                        type="text"
                        defaultValue={edit.ngayKhoiChieu?.slice(0, 10)}
                        onChange={formik.handleChange}
                        name="ngayKhoiChieu"
                        
                      />
                    </div>
                    <div className="modal-footer">
                      <button type="submit" className="btn btn-success">
                        Cập nhật
                      </button>
                    </div>
                  </Form>
                )}
              />
            </div>
          </div>
        </div>
      </div>
      </Fade>
    );
  }
}

export default ModalMovie;
