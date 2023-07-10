import React, { Component } from 'react'
class NavBar extends Component {
    state = {}
    render() {
        return (
            <nav class="navbar navbar-light bg-light">
                <span class="navbar-brand mb-0 h1">Count: {this.props.getCount} | Total: {this.props.getSum}</span>
            </nav>
        );
    }
}

export default NavBar;