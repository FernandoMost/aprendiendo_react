import React, { Component } from 'react'

export class BarraBusqueda extends Component {
    state = {
        inputPokemon: ''
    }

    _manejaCambio = (e) => {
        this.setState({
            inputPokemon: e.target.value
        })
    }

    _manejaBusqueda = (e) => {
        e.preventDefault()
        const { inputPokemon } = this.state

        fetch(`https://pokeapi.co/api/v2/pokemon/${inputPokemon}`)
            .then(res => res.json())
            .then(results => this.props.onResults(results))
    }



    render () {
        return (
            <form onSubmit={this._manejaBusqueda}>
                <div className="barra-busqueda">
                    <input
                        onChange={this._manejaCambio}
                        type="text"
                        placeholder="Nombre del pokémon..." />
                
                    <button> Buscar </button>
                </div>
            </form>
        )
    }
}
