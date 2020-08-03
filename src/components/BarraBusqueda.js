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
            const { Search, totalResults = "0" } = results
            console.log({ Search, totalResults })

          })
    }



    render () {
        return (
            <form onSubmit={this._handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input
                            className="input"
                            onChange={this._handleChange}
                            type="text"
                            placeholder="Nombre del pokemon..." />
                    </div>
                    <div className="control">
                        <button className="button is-info">
                            Buscar
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}
