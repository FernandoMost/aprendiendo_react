import React, { Component } from 'react'

export class PokemonCard extends Component {
	


	render () {
		// const { pokemon } = this.props.pokemon
		// console.log(this.props)

		return (
			<div>
				<p> <strong> id: </strong> 				{ this.props.pokemon.id } </p>
				<p> <strong> name: </strong> 			{ this.props.pokemon.name } </p>
				<p> <strong> base_experience: </strong>	{ this.props.pokemon.base_experience } </p>
				<p> <strong> height: </strong> 			{ this.props.pokemon.height } </p>
				<p> <strong> is_default: </strong> 		{ this.props.pokemon.is_default } </p>
				<p> <strong> order: </strong> 			{ this.props.pokemon.order } </p>
				<p> <strong> weight: </strong> 			{ this.props.pokemon.weight } </p>
			</div>
		)
	}
}