import React, { Component } from 'react';
import CardNota from './CardNota';

export default class ListadeNotas extends Component {
    render() {
        return (
            <ul>
                <li>
                    <CardNota />
                </li>
            </ul>
        )
    }
}