import ListadeNotas from "./components/ListadeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import { Component } from "react";
import "./assets/App.css";
import './assets/index.css';
import ListaCategorias from "./components/ListaCategorias";

class App extends Component {

  constructor() {

    super();
    // Array de Notas salvo no state do App
    this.state = {
      notas: [],
      categorias: ['Games', 'Música']
    }
  }

  criarNota(titulo, texto, categoria) {
    const novaNota = { titulo, texto, categoria }
    const novoArrayNotas = [...this.state.notas, novaNota];

    const novoEstado = {
      notas: novoArrayNotas
    }
    this.setState(novoEstado)
  }

  deletarNota(index) {
    let arrayNotas = this.state.notas;

    // Função que deleta o item efetivamente - splice é uma função que altera o próprio array
    arrayNotas.splice(index, 1)
    this.setState({ notas: arrayNotas })
  }

  adicionarCategoria(nomeCategoria) {
    const novoArrayCategorias = [...this.state.categorias, nomeCategoria];

    const novoEstado = { ...this.state, categorias: novoArrayCategorias };
    this.setState(novoEstado)
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro categorias={this.state.categorias} criarNota={this.criarNota.bind(this)} />

        <main className="conteudo-principal">
          <ListaCategorias adicionarCategoria={this.adicionarCategoria.bind(this)} categorias={this.state.categorias} />

        </main>
        <ListadeNotas apagarNota={this.deletarNota.bind(this)} notas={this.state.notas} />
      </ section>
    );
  }

}

export default App;
