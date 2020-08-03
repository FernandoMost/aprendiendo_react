import React, { Component } from 'react'

export class BarraBusqueda extends Component {
    state = {
        inputPokemon: ''
    }

    _handleChange = (e) => {
        this.setState({ inputPokemon: e.target.value })
    }

    _handleSubmit = (e) => {
        e.preventDefault()
        const { inputPokemon } = this.state

        console.log(inputPokemon)

        fetch(`https://pokeapi.co/api/v2/pokemon/${inputPokemon}`)
            .then(res => res.json())
            .then(results => {
                console.log(results)
            })
    }



    render () {
        return (
            <form onSubmit={this._handleSubmit}>
                <div className="barra-busqueda">
                    <input
                        className="input"
                        onChange={this._handleChange}
                        type="text"
                        placeholder="Nombre del pokemon..." />
                
                    <button> Buscar </button>
                </div>
            </form>
        )
    }
}
