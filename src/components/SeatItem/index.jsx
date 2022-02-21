import React, { Component } from "react";
import { connect } from "react-redux";
import classNames from "classnames";

class SeatItem extends Component {
  state = {
    isBooking: false,
  };
  chooseSeat = (seat) => {
    this.props.dispatch({
      type: "CHOOSE_SEAT",
      payload: seat,
    });
    this.setState({
      isBooking: !this.state.isBooking,
    });
  };

  render() {
    const { seat } = this.props;
    if (seat.loaiGhe === "Thuong") {
      return (
        <button
          className={classNames({
            btn: true,
            "btn-secondary": !this.state.isBooking,
            "btn-success": this.state.isBooking,
          })}
          disabled={seat.daDat}
          onClick={() => {
            this.chooseSeat(seat);
          }}
        ></button>
      );
    }
    return (
      <button
        className={classNames({
          btn: true,
          list__seat__vip: !this.state.isBooking,
          "btn-success": this.state.isBooking,
        })}
        onClick={() => {
          this.chooseSeat(seat);
        }}
        disabled={seat.daDat}
      ></button>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(SeatItem);
