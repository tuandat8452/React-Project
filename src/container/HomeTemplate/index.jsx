import React, { Component } from "react";
import { Route } from "react-router";
import LayoutHome from "../../components/LayoutHome";

class HomeTemplate extends Component {
  render() {
    const { exact, path, component } = this.props;
    return (
      <LayoutHome>
        <Route exact={exact} path={path} component={component} />
      </LayoutHome>
    );
  }
}

export default HomeTemplate;
