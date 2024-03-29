import React, { Component } from "react";
import CardNota from "../CardNota/";
import './estilo.css';

class ListaDeNotas extends Component {


 
  render() {
    return (
      <ul className="lista-notas">
        {this.props.notas.map((nota,index) => {
          return (
            <li key={index} className="lista-notas_item">
              
              <CardNota titulo={nota.titulo} 
              indice={index}
              apagarNota={this.props.apagarNota} 
              texto={nota.texto}/>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
