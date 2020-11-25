import React from 'react';
import logo from './logo.svg';
import './App.css';

// Importar componentes hijos
import Form from './componentes/Form';
import Resultado from './componentes/Resultado';

// Exporto funcion API
const pjConfirmado = require("./library/ApiRickYMorty");

class App extends React.Component
{
  constructor(props) {
    super(props)

    this.state = {
      id: "",
      name: "",
      status: "",
      species: "",
    }

    // Este seteo es necesario para poder usar el this.state en las funciones
    this.handlerApi = this.handlerApi.bind(this)
  }

  /* Metodo para consumir la API */
  handlerApi(personaje) {

    pjConfirmado(personaje).then(confirmados => {

      let PJConfirmados = confirmados[confirmados.length -1];

      this.setstate({
        personaje:  ( personaje === confirmados ? '': personaje.slice(1) ),
        id: PJConfirmados.id,
        name: PJConfirmados.name,
        status: PJConfirmados.status,
        species: PJConfirmados.species.substring(0,10),
      })

    }).catch( (error) => {
      alert('Error con la Api al buscar pj')
      console.log("Error: " + error.message)
    })
    
  }

  render()
  {
    return(<div className="App">
    <header className="App-header">
    <h2 className="display-4 text-center ">React</h2>
      <img src={logo} className="App-logo" alt="logo" />
    </header>

    <main className = "conteiner">
      <h1 className="display-4 text-center pt-3" id="titulo" >Rick y Morty API</h1>

      <div className="row bg-light mt-4 justify-content-between">

            {/* Componente del formulario */}
            <Form clasesCSS="col-3 card card-body" handlerApi={this.handlerApi} />
            

            {/* Tabla de resultados */}
            <Resultado clasesCSS="col-8 card card-body" 
              id = {this.state.id}
              personaje = {this.state.name}
              status = {this.state.status}
              species = {this.state.species} 
            />
          </div>
      </main>
  </div>
  );
  }
  }

export default App;
