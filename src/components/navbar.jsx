import React, { PureComponent } from 'react';

// PureComponent 
class NavBar extends PureComponent {
    render() {
        return (
                <nav className="navbar">
                    <span>Habit Tracker</span>
                    <i className="navbar-logo fab fa-pagelines"></i>
                    <span className="navbar-button"> {this.props.totalCount} </span>
                </nav>
        );
    }
}

export default NavBar;