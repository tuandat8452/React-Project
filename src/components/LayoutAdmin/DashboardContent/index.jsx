import React, { Component } from "react";
import Device from "./Device";
import Sales from "./Sales";
import Statistical from "./Statistical";

class DashboardContent extends Component {
  render() {
    return (
      <div className="content__dashboard">
        <div className="row">
          <div className="col-lg-12 statisical">
            <Statistical />
          </div>
          <div className="col-lg-8 sales">
            <Sales />
          </div>
          <div className="col-lg-4 device">
            <Device />
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardContent;
