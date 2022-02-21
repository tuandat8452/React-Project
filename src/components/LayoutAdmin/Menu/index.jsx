import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  Sidebar,
  InputItem,
  Icon,
  Item,
  Logo,
  LogoText,
} from "react-sidebar-ui";

class Menu extends Component {
  state = {
    isCollapsed: false,
  };
  render() {
    const accountAdmin = JSON.parse(sessionStorage.getItem("Adminlogin"));
    return (
      <Sidebar bgColor="black" isCollapsed={false}>
        <Logo image="https://loremflickr.com/320/240" imageName="logo" />
        <LogoText>{accountAdmin.hoTen}</LogoText>
        {/* <DropdownItem
          values={['First', 'Second', 'Third']}
          bgColor={'black'}>
          Menu
        </DropdownItem> */}

        <div className="position-relative item__sidebar">
          <NavLink activeClassName="active" to="/dashboard">
            <Item bgColor="black">
              <Icon>
                <i className="fa fa-th-large"></i>
              </Icon>
              Dashboard
            </Item>
          </NavLink>
        </div>
        <div className="position-relative item__sidebar">
          <NavLink activeClassName="active" to="/user-manager">
            <Item bgColor="black">
              <Icon>
                <i class="fa fa-user-cog"></i>
              </Icon>
              User Manager
            </Item>
          </NavLink>
        </div>
        <div className="position-relative item__sidebar">
          <NavLink activeClassName="active" to="/movie-manager">
            <Item bgColor="black">
              <Icon>
                <i class="fa fa-film"></i>
              </Icon>
              Movie Manager
            </Item>
          </NavLink>
        </div>
        <div className="position-relative item__sidebar">
          <Item bgColor="black">
            <Icon>
              <i className="far fa-address-book" />
            </Icon>
            Contacts
          </Item>
        </div>
        <div className="position-relative item__sidebar">
          <Item bgColor="black">
            <Icon>
              <i className="fas fa-rss-square" />
            </Icon>
            Blog
          </Item>
        </div>
        <InputItem type="text" placeholder={"Search..."} />
        <div className="social mt-5 d-flex">
          <i className="fab fa-facebook-square" />
          <i className="fab fa-youtube-square" />
          <i className="fab fa-github-square" />
          <i className="fab fa-linkedin" />
        </div>
      </Sidebar>
    );
  }
}

export default Menu;
