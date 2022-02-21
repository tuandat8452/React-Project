import React, { Component } from "react";
import { Redirect, Route } from "react-router";
import LayoutAdmin from "../../components/LayoutAdmin";

class AdminTemplate extends Component {
  render() {
    const { exact, path, component } = this.props;
    if (sessionStorage.getItem("Adminlogin")) {
      return (
        <LayoutAdmin>
          <Route exact={exact} path={path} component={component} />
        </LayoutAdmin>
      );
    }
    return <Redirect to="/auth" />;
  }
}

export default AdminTemplate;
