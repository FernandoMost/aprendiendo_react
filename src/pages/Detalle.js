import React, { Component } from 'react'

export class Detalle extends Component {

    render () {
		// const { pokemon } = this.props.pokemon
		// console.log(this.props)

		return (
			<div>
                <div>
                    <h1>#{ this.props.pokemon.id } <strong>{ this.props.pokemon.name }</strong></h1>
                </div>

                <img className="pokemon-img"
                    src = {`https://pokeres.bastionbot.org/images/pokemon/${ this.props.pokemon.id }.png`}
                    width="500" height="500"
                    alt="Imagen pokemon"
                    onError={(e) => {
                        e.target.onerror = null; e.target.src="https://pngimg.com/uploads/pokeball/pokeball_PNG8.png"
                    }}
                />

				<p> <strong> base_experience: </strong>	{ this.props.pokemon.base_experience } </p>
				<p> <strong> height: </strong> 			{ this.props.pokemon.height } </p>
				<p> <strong> order: </strong> 			{ this.props.pokemon.order } </p>
				<p> <strong> weight: </strong> 			{ this.props.pokemon.weight } </p>
			</div>
		)
	}
	
}