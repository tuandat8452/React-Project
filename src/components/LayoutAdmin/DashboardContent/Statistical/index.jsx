import React, { Component } from "react";
import Budget from "./Budget";
import TotalCustomers from "./TotalCustomer";
import TotalProfit from "./TotalProfit";
import TaskProgress from "./TaskProgress";

class Statistical extends Component {
  render() {
    return (
      <div className="row mb-4">
        <div className="col-lg-3 customer">
          <TotalCustomers />
        </div>
        <div className="col-lg-3 budget">
          <Budget />
        </div>
        <div className="col-lg-3 profit">
          <TotalProfit />
        </div>
        <div className="col-lg-3 progress__total">
          <TaskProgress />
        </div>
      </div>
    );
  }
}

export default Statistical;
