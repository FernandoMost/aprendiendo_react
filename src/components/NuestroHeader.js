import React, { Component } from 'react';
import logo from '../logo.png';
import '../App.css';

export class NuestroHeader extends Component {
    render() { return (
        <div className="nuestro-header">
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    ); }
}
