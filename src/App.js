import React, { Component } from 'react';
import Botao from './Botao';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.frases = ["A vida trará coisas boas se tiver paciência", "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si"
      , "Não compense na ira o que lhe falta na razão", "Defeitos e virtudes são apenas dois lados da mesma moeda", "A maior de todas as torres começa no solo",
      "Não há que ser forte. Há que ser flexível", "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?", "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida",
      "A juventude não é uma época da vida, é um estado de espírito", "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos"];

    this.state = {

      numeroDaSorte: '',
      exibirFrase: '',
      mostrabotao: true
    }
    this.quebrarBiscoito = this.quebrarBiscoito.bind(this);
  }


  async quebrarBiscoito(e) {

    document.getElementById("TextoFrase").style.display = 'block';
    let state = this.state;
    state.numeroDaSorte = Math.floor(Math.random() * this.frases.length);
    state.exibirFrase = '"' + this.frases[state.numeroDaSorte] + '"';
    this.setState(state);
    state.mostrabotao = false;

    await setTimeout(() => {
      this.setState({ exibirFrase: '' });
      this.setState({ mostrabotao: true });
    }, 10000)





  }


  render() {

    return (
      <div className="App">
        <img src={require('./assets/biscoito.png')} className="img" alt="Biscoito da Sorte" />
        {this.state.mostrabotao && <Botao nome="Quebrar Biscoito" quebrar={this.quebrarBiscoito} />}
        <div>
          <h3 id="TextoFrase" className="TextoFrase">{this.state.exibirFrase}</h3>
        </div>
      </div>
    );

  }
}


export default App;
