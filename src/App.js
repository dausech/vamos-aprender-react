import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld';// nosso primeiro componente React!

class App extends Component {
  render() {
    const nomes = ["Lucas", "Tableless", "Leitor", "Maria", "João", "Ana"];
    return <div>
    {nomes.map((n, i) => <HelloWorld nome={n} key={i}/>)}
    </div>;
  }
}

export default App;
