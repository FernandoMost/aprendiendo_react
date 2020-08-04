import React, { Component } from 'react'
import { PokemonCard } from '../components/PokemonCard'

export class PokemonsList extends Component {
	state = {
		resultados: []
	}

	componentWillMount() {
		fetch(`https://pokeapi.co/api/v2/pokemon/?limit=500`)
            .then(respuesta => respuesta.json())
            .then(datos => this.setState({ resultados: datos.results }))
	}

	render () {
		const { resultados } = this.state

		return (
			<div>
				{
					resultados.map((p, index) =>
						<p key={index}> {p.name} </p>
					)
				}
			</div>
		)
	}
}