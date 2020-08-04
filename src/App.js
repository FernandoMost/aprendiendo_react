import React, { Component } from 'react';
import { Route, Switch } from "wouter";
import './App.css';

import { NuestroHeader } from './components/NuestroHeader';
import { Home } from './pages/Home';

class App extends Component {
    

    render() { return (
        <div className="App">
        	<NuestroHeader />

			<Switch>
				<Route path="/" component={Home} />
			</Switch>
        </div>
    ); }
}

export default App;
