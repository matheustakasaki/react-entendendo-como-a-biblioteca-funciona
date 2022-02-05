import ListadeNotas from "./components/ListadeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import { Component } from "react";
import "./assets/App.css";
import './assets/index.css';
import ListaCategorias from "./components/ListaCategorias";
import Categorias from "./dados/Categorias";
import ArrayNotas from "./dados/ArrayNotas";

class App extends Component {

  constructor() {

    super();
    // Array de Notas salvo no state do App

    this.categorias = new Categorias();
    this.notas = new ArrayNotas();
  }


  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro categorias={this.categorias.categorias} criarNota={this.notas.adicionarNota} />

        <main className="conteudo-principal">
          <ListaCategorias adicionarCategoria={this.categorias.adicionarCategoria} categorias={this.categorias.categorias} />

        </main>
        <ListadeNotas apagarNota={this.notas.apagarNotas} notas={this.notas.notas} />
      </ section>
    );
  }

}

export default App;
