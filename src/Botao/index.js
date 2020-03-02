import React, { Component } from 'react';
import './style.css';

class Botao extends Component{
    render(){
        return(
            <div>
                <button className="Botao" id="Botao" onClick={this.props.quebrar}>{this.props.nome}</button>
            </div>
        );
    }
}

export default Botao;