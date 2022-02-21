import React, { Component } from "react";
class DetailHistory extends Component {
  renderDetailHistory = () => {
    return this.props.info.danhSachGhe.map((seat) => {
      return (
        <tr>
          <td>{seat.tenHeThongRap}</td>
          <td>{seat.tenCumRap}</td>
          <td>{seat.tenGhe}</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="modal-dialog">
        <div className="modal-content">
          {/* Modal Header */}
          <div className="modal-header">
            <h4 className="modal-title">Thông tin chi tiết</h4>
            <button type="button" className="close" data-dismiss="modal">
              ×
            </button>
          </div>
          {/* Modal body */}
          <div className="modal-body">
            <table className="table">
              <thead>
                <tr>
                  <th>Tên hệ thống rạp</th>
                  <th>Tên rạp</th>
                  <th>Số ghế</th>
                </tr>
              </thead>
              <tbody>{this.renderDetailHistory()}</tbody>
            </table>
          </div>
          {/* Modal footer */}
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              data-dismiss="modal"
            >
              Đóng
            </button>
          </div>
        </div>
      </div>
    );
  }
 
}

export default DetailHistory;
