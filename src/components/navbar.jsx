import React, { Component } from 'react';

// Pure Component 
class NavBar extends Component {
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