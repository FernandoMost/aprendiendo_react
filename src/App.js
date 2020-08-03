import React, { Component } from 'react';
import { Link, Route } from "wouter";
import { BarraBusqueda } from './components/BarraBusqueda';
import { NuestroHeader } from './components/NuestroHeader';
import './App.css';

class App extends Component {
    

    render() { return (
        <div className="App">
        	<NuestroHeader />

            <BarraBusqueda />
        </div>
    ); }
}

export default App;
