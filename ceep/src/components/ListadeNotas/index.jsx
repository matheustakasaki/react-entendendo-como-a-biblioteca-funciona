import React, { Component } from 'react';
import CardNota from '../CardNota';
import './style.css'
export default class ListadeNotas extends Component {

    render() {
        return (
            <ul className="lista-notas">
                {Array.of("Trabalho", "Lazer", "Estudos").map((categoria, index) => {
                    return (
                        <li className="lista-notas_item" key={index}>
                            <CardNota />
                        </li>
                    );
                })}
            </ul>
        )
    }
}