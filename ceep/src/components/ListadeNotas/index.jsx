import React, { Component } from 'react';
import CardNota from '../CardNota';

export default class ListadeNotas extends Component {

    render() {
        return (
            <ul>
                {Array.of('Trabalho', 'Lazer', 'Estudos').map((categoria, index) => {
                    return (
                        <li key={index}>
                            <CardNota />
                        </li>
                    )
                })}

            </ul>
        )
    }
}