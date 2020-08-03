import React, { Component } from 'react';
import { Link, Route } from "wouter";
import { BarraBusqueda } from './components/BarraBusqueda'
import logo from './logo.png';
import './App.css';

class App extends Component {
    

    render() { return (
        <div className="App">
            <div className="nuestro-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>PokeApp</h1>
            </div>

            <BarraBusqueda />
        </div>
    ); }
}

export default App;
