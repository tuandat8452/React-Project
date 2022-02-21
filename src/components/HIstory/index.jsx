import React, { Component } from "react";
import DetailHistory from "../DetailHistory";
import Fade from "react-reveal/Fade";

class History extends Component {
  state = {
    isVisiable : 3
  }

  handleViewMore = () => {
    this.setState({
      isVisiable: this.state.isVisiable + 3
    })
  }

  renderHistory = () => {
    const infoUser = JSON.parse(localStorage.getItem("Infouser"));
    // console.log(infoUser);
    return infoUser.thongTinDatVe.reverse().slice(0,this.state.isVisiable).map((info, index) => {
      return (
        <>
          <tr className="fadeInUp animated " key={index}>
            <td>{index + 1}</td>
            <td>{info.tenPhim}</td>
            <td>
              {new Date(info.ngayDat).getDate() +
                "/" +
                (new Date(info.ngayDat).getMonth() + 1) +
                "/" +
                new Date(info.ngayDat).getFullYear() +
                "-" +
                new Date(info.ngayDat).getHours() +
                ":" +
                new Date(info.ngayDat).getMinutes() +
                ":" +
                new Date(info.ngayDat).getSeconds()}
            </td>
            <td>{info.giaVe} VNĐ</td>
            <td>
              <span
                data-toggle="modal"
                data-target={`#${"modal" + info.maVe}`}
                style={{ cursor: "pointer", fontWeight: "bold" }}
              >
                [Xem chi tiết]
              </span>
            </td>
          </tr>
          <Fade top>
            <div className="modal modal__history" id={"modal" + info.maVe}>
              <DetailHistory info={info} />
            </div>
          </Fade>
        </>
      );
    });
  };

  render() {
    return (
      <>
        <table className="table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên phim</th>
              <th>Ngày giờ đặt</th>
              <th>Giá vé</th>
              <th>Chi tiết</th>
            </tr>
          </thead>
          <tbody>{this.renderHistory()}</tbody>
        </table>
        <div className="text-center mt-2 mb-2">
          <button className="btn btn-secondary" onClick={this.handleViewMore}>Xem thêm</button>
        </div>
      </>
    );
  }
}

export default History;
