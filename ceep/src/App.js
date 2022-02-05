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
      notas: []
    }
  }

  criarNota(titulo, texto) {
    const novaNota = { titulo, texto }
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

    console.log('deletar');
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />

        <main>
          <ListaCategorias>

          </ListaCategorias>
        </main>
        <ListadeNotas apagarNota={this.deletarNota.bind(this)} notas={this.state.notas} />
      </ section>
    );
  }

}

export default App;
