import React, { Component } from "react";
import Loading from "../../assets/loader.gif";

function PageLoading() {
  return (
    <div className="loading-screen">
      <img src={Loading} alt="loading..." />
    </div>
  );
}

export default PageLoading;
