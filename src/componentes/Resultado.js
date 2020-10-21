import React from 'react';

class Resultado extends React.Component {


    render() {
        return (
            <div className={this.props.clasesCSS}>
                
                <h2 className="display-4 text-center pb-3" id="resultado">Resultados de busqueda</h2>

                <table className="table table-hover m-0" id="tabla">
                    <thead>
                        <tr>
                            <th scope="col">Personaje</th>
                            <th scope="col">Estatus</th>
                            <th scope="col">Especie</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> { this.props.personaje.length !== 0 ? this.props.personaje : " --- "} </td>
                            <td> { this.props.personaje.length !== 0 ? this.props.status : " --- " } </td>
                            <td> { this.props.personaje.length !== 0 ? this.props.species : " --- " } </td>
                        </tr>
                    </tbody>
                    
                </table>

            </div>
        )
    }
}

/* Exporto este componente */
export default Resultado;