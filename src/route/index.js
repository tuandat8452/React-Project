import Dashboard from "../container/AdminTemplate/Dashboard";
import MovieManager from "../container/AdminTemplate/MoiveManager";
import UserManager from "../container/AdminTemplate/UserManager";
import DetailMovie from "../container/HomeTemplate/Detail";
import Home from "../container/HomeTemplate/Home";
import Profile from "../container/HomeTemplate/Profile";

export const routeHome = [
  {
    exact: true,
    path: "/",
    component: Home,
  },
  {
    exact: false,
    path: "/chi-tiet-phim/:id",
    component: DetailMovie,
  },
  {
    exact: false,
    path: "/profile",
    component: Profile,
  }
];

export const routeAdmin = [
  {
    exact: false,
    path: "/dashboard",
    component: Dashboard,
  },
  {
    exact: false,
    path: "/user-manager",
    component: UserManager,
  },
  { exact: false, 
    path: "/movie-manager", 
    component: MovieManager },
];
