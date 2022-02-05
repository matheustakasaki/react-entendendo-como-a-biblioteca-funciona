import React, { Component } from 'react';

export default class FormularioCadastro extends Component {
    render() {
        return (
            <>
                <form>
                    <input type="text" placeholder="Título"></input>
                    <textarea rows={15} placeholder="Escreva sua nota..."></textarea>
                    <button >Criar nota</button>
                </form>
            </>
        )
    }
}