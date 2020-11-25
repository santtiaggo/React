import React from 'react';


class Form extends React.Component {

    constructor(props){
      super(props)
      this.state = {
        personaje : [1]
      }
  
      // Este seteo es necesario para poder usar el this.state en las funciones
      this.handlerBuscador = this.handlerBuscador.bind(this)
      this.handlerUpdatePJ = this.handlerUpdatePJ.bind(this)
      
    }
  
    // Metodo manejador del evento
    handlerBuscador(){
      this.props.handlerApi( this.state.personaje )
    }
  
    // Metodo para setear el personaje del State
    handlerUpdatePJ(e){
      // e => elemento que "causo" el evento :::: e.target => accede al elemento
      let personaje = e.target.value
      this.setState({
        personaje : personaje
      })
    }
  
    render() {

      return (  
           
        <div>

          <div className="form-group mb-0">
            
            <label className="inputPersonaje" id="labelBuscar">Selecciones un personaje</label>
            <div className="form-group">
           
              <select className="custom-select" name="personaje" id="personaje" onChange={this.handlerUpdatePJ}>
                <option value="Rick Sanchez">Rick Sanchez</option>
                <option value="Samantha">Samantha</option>
                <option value="Mobius lento">Mobius lento</option>
                <option value="4">Rick lento</option>
                <option value="5">Tricia Lange</option>
                <option value="6">Oficial SWAT</option>
                <option value="7">Enfermera de San Gloopy Noops</option>
                
              </select>
            </div>
            
          </div>
          
          <button type="button" id = "boton" onClick={this.handlerBuscador} className="btn btn-primary btn-block">Buscar</button>  
         
        </div> 
         
      )}
  }


export default Form;