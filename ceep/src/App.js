import ListadeNotas from "./components/ListadeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import { Component } from "react";



class App extends Component {

  render() {
    return (
      <>
        <FormularioCadastro />
        <ListadeNotas />
      </>
    );
  }

}

export default App;
