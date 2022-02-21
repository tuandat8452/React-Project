import React, { Component } from 'react';
import HeaderDashboard from './Header';
import Menu from './Menu';

class LayoutAdmin extends Component {
    render() {
        return (
            <>
            <HeaderDashboard/>
            <Menu/>
                {this.props.children}
            </>
        );
    }
}

export default LayoutAdmin;