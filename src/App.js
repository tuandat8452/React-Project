import { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import AdminTemplate from "./container/AdminTemplate";
import AddUser from "./container/AdminTemplate/AddUser";
import AddMovie from "./container/AdminTemplate/AddMovie";
import Auth from "./container/Auth";
import HomeTemplate from "./container/HomeTemplate";
import Login from "./container/Login";
import PageNotFound from "./container/PageNotFound";
import Signup from "./container/Signup";
import { routeAdmin, routeHome } from "./route";
import BookingTicket from "./container/HomeTemplate/BookingTicket";


class App extends Component {
  showLayoutHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <HomeTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            component={item.component}
          />
        );
      });
    }
  };

  showLayoutAdmin = routes => {
    if(routes && routes.length > 0 ) {
      return routes.map((item, index) => {
        return (
          <AdminTemplate
          key={index}
          exact={item.exact}
          path={item.path}
          component={item.component}
          />
        )
      })
    }
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {this.showLayoutHome(routeHome)}
          {this.showLayoutAdmin(routeAdmin)}
          <Route path="/booking-ticket/:maLC" component={BookingTicket}/>
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={Signup} />
          <Route path="/auth" component={Auth} />
          <Route path="/add-user" component={AddUser}/>
          <Route path="/add-movie" component={AddMovie}/>
          <Route path="" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
