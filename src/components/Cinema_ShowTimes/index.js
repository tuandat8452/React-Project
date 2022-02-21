import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import GroupCinemaShowTime from '../GroupCinema_ShowTime';
import { actFetchListCinemaShowTime } from "../ShowTimes/module/action";

function CinemaShowTime(props) {

  const [maHTRap, setMaHTRap] = useState("BHDStar")
  useEffect(() => {
    // console.log("eff");
    props.fetchListCinema(props.maHeThongRap);
  }, [maHTRap]);

  useEffect(() => {
    setMaHTRap(props.maHeThongRap);
  })
  const renderGroupCinema = () => {

    if (props.listCinema && props.listCinema.length > 0) {
      // console.log(props.listCinema);
      return props.listCinema.map((item, index) => {
        return <GroupCinemaShowTime key={item.maCumRap} Group={item} Index={index} />
      })
    }
  }
  return (
    <div>
      {/* {console.log("render")} */}
      <div className={props.maHeThongRap === "BHDStar" ? "tab-pane fade show active" : "tab-pane fade show"} id={`v-pills-${props.maHeThongRap}`} role="tabpanel" aria-labelledby={`v-pills-${props.maHeThongRap}-tab`} >
        {/* {console.log(props.Cinema)} */}
        {renderGroupCinema()}
      </div>

    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchListCinema: (maHeThong) => {
      dispatch(actFetchListCinemaShowTime(maHeThong));
    }
  }
}

const mapStateToProps = (state) => {
  return {
    listCinema: state.ShowTimeReducer.listCinema,
    maHeThongRap: state.ShowTimeReducer.maHeThongRap,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CinemaShowTime);
