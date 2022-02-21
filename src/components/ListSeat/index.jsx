import React, { Component } from "react";
import SeatItem from "../SeatItem";

class ListSeat extends Component {
  renderListSeat = () => {
    return this.props.data.danhSachGhe?.map((seat) => {
    return <SeatItem seat={seat} key={seat.stt} dispatch = {this.props.dispatch} />
    });
  };
  render() {
    return (
      <div className="list__seat mx-auto">
        <div className="list__seat__main">{this.renderListSeat()}</div>
      </div>
    );
  }
}

export default ListSeat;
