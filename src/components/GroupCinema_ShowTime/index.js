import React from "react";
import { connect } from "react-redux";
import { actFetchMaCumRapShowTime } from "../ShowTimes/module/action";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Cinema from "../../assets/cinema/cinema.jpg";
import Fade from "react-reveal";

const GroupCinemaShowTime = (props) => {
  // console.log(props.Group);
  return (
    <div
      className={
        props.Index === 0 ? "row rap__item show active " : "row rap__item"
      }
      onClick={() => {
        props.handleClickCinema(props.Group.maCumRap);
      }}
    >
      <Fade left>
        <div className="col-3 rap__img">
          <LazyLoadImage src={Cinema} alt={props.Group.tenCumRap} />
        </div>
        <div className="col-9 rap__text">
          <p>{props.Group.tenCumRap}</p>
          <span>{props.Group.diaChi}</span>
          <br />
          <a className="d-inline" href="#">[ Chi tiết ]</a>
        </div>
      </Fade>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleClickCinema: (maCumRap) => {
      dispatch(actFetchMaCumRapShowTime(maCumRap));
    },
  };
};

export default connect(null, mapDispatchToProps)(GroupCinemaShowTime);
