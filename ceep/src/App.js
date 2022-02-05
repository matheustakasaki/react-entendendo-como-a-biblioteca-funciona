import ListadeNotas from "./components/ListadeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import { Component } from "react";
import "./assets/App.css";
import './assets/index.css';


class App extends Component {

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro />
        <ListadeNotas />
      </ section>
    );
  }

}

export default App;
