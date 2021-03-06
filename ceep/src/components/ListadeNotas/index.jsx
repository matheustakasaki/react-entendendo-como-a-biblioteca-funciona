import React, { Component } from 'react';
import CardNota from '../CardNota';
import './style.css'
export default class ListadeNotas extends Component {

    render() {
        return (
            <ul className="lista-notas">
                {this.props.notas.map((nota, index) => {
                    return (
                        <li className="lista-notas_item" key={index}>
                            <CardNota categoria={nota.categoria} indice={index} apagarNota={this.props.apagarNota} titulo={nota.titulo} texto={nota.texto} />
                        </li>
                    );
                })}
            </ul>
        )
    }
}