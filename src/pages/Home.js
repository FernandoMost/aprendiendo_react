import React, { Component } from 'react'
import { BarraBusqueda } from '../components/BarraBusqueda';
import { PokemonsList } from '../components/PokemonsList';
import { PokemonCard } from '../components/PokemonCard';

export class Home extends Component {
	state = {
		busquedaHecha: false,
		resultados: []
	}

	_manejaResultados = (r) => {
		this.setState({
			resultados: r,
			busquedaHecha: true
		})
	}
	
	_renderizaResultados() {
		return this.state.resultados.length === 0
			? 	<div>
					<p> No hay resultados! </p>
					<PokemonsList />
				</div>
			
			: 	<PokemonCard pokemon={this.state.resultados} />
	}

    render() { return (
    	<div>
	    	<BarraBusqueda onResults={this._manejaResultados} />

	    	{
	    		this.state.busquedaHecha
	    		? this._renderizaResultados()
	    		: <PokemonsList />
	    	}
    	</div>
    ); }
}
