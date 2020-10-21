import React from 'react';


class Form extends React.Component {

    constructor(props){
      super(props)
      this.state = {
        personaje : 'Rick Sanchez'
      }
  
      // Este seteo es necesario para poder usar el this.state en las funciones
      this.handlerBuscador = this.handlerBuscador.bind(this)
      this.HandlerUpdatePJ = this.HandlerUpdatePJ.bind(this)
      
    }
  
    // Metodo manejador del evento
    handlerBuscador(){
      this.props.handlerApi( this.state.personaje )
    }
  
    // Metodo para setear el pais del State
    HandlerUpdatePJ(e){
      // e => elemento que "causo" el evento :::: e.target => accede al elemento
      let personaje = e.target.value
      this.setState({
        personaje : personaje
      })
    }
  
    render() {
      return (      
        <div className={this.props.clasesCSS} >

          <div className="form-group mb-0">
            {/* -------- LABEL -------- */}
            <label className="inputPais" id="seleccion">Selecciones un personaje</label>
            <div className="form-group">
            {/* -------- SELECT -------- */}
              <select className="custom-select" name="personaje" id="personaje" onChange={this.HandlerUpdatePJ}>
                <option value="argentina">Rick Sanchez</option>
                <option value="uruguay">Samantha</option>
                <option value="brazil">Mobius lento</option>
                <option value="chile">Rick lento</option>
                <option value="mexico">Tricia Lange</option>
                <option value="usa">Oficial SWAT</option>
                <option value="canada">Enfermera de San Gloopy Noops</option>
              </select>
            </div>
          </div>
  
          <button type="button" onClick={this.handlerBuscador} className="btn btn-primary btn-block">Buscar</button>
          
        </div>
      )}
  }

/* Exporto este componente */
export default Form;