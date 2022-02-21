import React, { Component } from "react";
import { connect } from "react-redux";
import DetailCinemaShowTime from "./DetailCinemaShowTime";

class ShowTimesDetail extends Component {
    renderLogo =() => {
        if(this.props.data && this.props.data.heThongRapChieu.length > 0 ) {
            return this.props.data.heThongRapChieu.map((item, index) => {
                return <li className="nav-item border-bottom" role="presentation" key={index}>
                <a
                  className={index ===0 ? "nav-link active" : "nav-link"}
                  data-toggle="tab"
                  data-target={`#${item.maHeThongRap}`}
                  role="tab"
                    style={{cursor:'pointer'}}
                >
                  <div className="d-flex align-items-center" style={{width:'160px'}}>
                  <img src={item.logo} alt="logo" />
                  <p className="mb-0 ml-2" style={{color:'#000',fontSize:16,textTransform:'uppercase'}}>{item.tenHeThongRap}</p>
                  </div>
                </a>
              </li>
            })
        }
      
    }

    renderListFilm = () => {
      if(this.props.data && this.props.data.heThongRapChieu.length > 0 ) {
        return this.props.data.heThongRapChieu.map((item,index) => {
          return (
              <div
              key={index}
              className={index ===0 ? "tab-pane fade show active": "tab-pane fade "}
              id={item.maHeThongRap}
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <DetailCinemaShowTime data= {item}/>
            </div>
          )
      })
      }
       
    }

  render() {
    return (
      <div className="show-time-detail">
        <ul className="nav nav-tabs border-right" id="myTab" role="tablist">
          {this.renderLogo()}
        </ul>
        <div className="tab-content list-cinema-detail" id="myTabContent">
         {this.renderListFilm()}
        </div>
      </div>
    );
  }

}
const mapStateToProps = state => {
    return {
        data : state.showTimeDetailReducer.data,
    }
}

export default connect(mapStateToProps)(ShowTimesDetail);
