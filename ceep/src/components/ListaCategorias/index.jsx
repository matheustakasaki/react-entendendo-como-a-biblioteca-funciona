import React, { Component } from 'react';


class ListaCategorias extends Component {

    _handleEventoInput(e) {

        if (e.key == 'Enter') {
            let valorCategoria = e.target.value
            this.props.adicionarCategoria(valorCategoria)
        }
    }
    render() {
        return (
            <section>
                <ul>
                    {this.props.categorias.map((categoria, index) => {

                        return <li key={index}>{categoria}</li>
                    })}
                </ul>
                <input onKeyUp={this._handleEventoInput.bind(this)} className='lista-categorias_input' placeholder='Adicionar Categoria' type="text"></input>
            </section>
        );
    }
}

export default ListaCategorias;