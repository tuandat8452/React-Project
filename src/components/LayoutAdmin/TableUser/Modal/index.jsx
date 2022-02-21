import React, { Component } from "react";
import { Formik, Form } from "formik";
import { editUser } from "./modules/action";
import Fade from 'react-reveal/Fade';

class ModalUser extends Component {
  state = {
    edit: {},
  };

  editUser = (data) => {
    this.props.dispatch(editUser(data));

  };

  static getDerivedStateFromProps(props, state) {

    if (props.detailUser !== state.edit) {
      return {
        edit: props.detailUser,
      };
    }
    return null;
  }

  render() {
    const {edit} = this.state;
    return (
      <Fade top>
        {/* The Modal */}
        <div className="modal" id="userModal">
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
                  onSubmit={this.editUser}
                  initialValues={{
                    taiKhoan:edit.taiKhoan,
                    matKhau: edit.matKhau,
                    hoTen: edit.hoTen,
                    email: edit.email,
                    soDt: edit.soDt,
                    maLoaiNguoiDung: edit.maLoaiNguoiDung,
                    maNhom: "GP01",
                  }}
                  enableReinitialize={true}
                  render={(formik) => (
                    <Form>
                      <div className="form-group">
                        <label>Tài khoản:</label>
                        <br />
                        <input
                          type="text"
                          defaultValue={edit.taiKhoan}
                          onChange={formik.handleChange}
                          name="taiKhoan"
                          disabled
                        />
                      </div>
                      <div className="form-group">
                        <label>Mật khẩu</label>
                        <br />
                        <input
                          type="password"
                          defaultValue={edit.matKhau}
                          onChange={formik.handleChange}
                          name="matKhau"
                        />
                      </div>
                      <div className="form-group">
                        <label>Họ tên:</label>
                        <br />
                        <input
                          type="text"
                          defaultValue={edit.hoTen}
                          onChange={formik.handleChange}
                          name="hoTen"
                        />
                      </div>
                      <div className="form-group">
                        <label>Email:</label>
                        <br />
                        <input
                          type="text"
                          defaultValue={edit.email}
                          onChange={formik.handleChange}
                          name="email"
                        />
                      </div>
                      <div className="form-group">
                        <label>Số điện thoại:</label>
                        <br />
                        <input
                          type="text"
                          defaultValue={edit.soDt}
                          onChange={formik.handleChange}
                          name="soDt"
                        />
                      </div>
                      <div className="form-group">
                        <label>Mã loại người dùng:</label>
                        <br />
                        <select
                          onChange={formik.handleChange}
                          name="maLoaiNguoiDung"
                        >
                          {edit.maLoaiNguoiDung === "KhachHang" ? (
                            <>
                              <option value={edit.maLoaiNguoiDung}>
                                Khách hàng
                              </option>
                              <option value="QuanTri">Quản trị</option>
                            </>
                          ) : (
                            <>
                              <option value={edit.maLoaiNguoiDung}>
                                Quản trị
                              </option>
                              <option value="KhachHang">Khách hàng</option>
                            </>
                          )}
                        </select>
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

export default ModalUser;
