import React, { Component } from "react";
import { Redirect } from "react-router";
import History from "../../../components/HIstory";
import Infomation from "../../../components/Infomation";

class Profile extends Component {
  render() {
    if (localStorage.getItem("Userlogin")) {
      return (
        <div className="profile__user" style={{ paddingTop: "4rem" }}>
          <div className="container">
              <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <a
                    className="nav-item nav-link active"
                    id="nav-home-tab"
                    data-toggle="tab"
                    data-target="#infomation"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    Thông tin cá nhân
                  </a>
                  <a
                    className="nav-item nav-link"
                    id="nav-home-tab"
                    data-toggle="tab"
                    data-target="#history"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    Lịch sử đặt vé
                  </a>
                </div>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="infomation"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <Infomation/>
                </div>
                <div
                  className="tab-pane fade "
                  id="history"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <History/>
                </div>
              </div>
            </div>
          </div>

      );
    }
    return <Redirect to="/" />;
  }
}



export default Profile;
