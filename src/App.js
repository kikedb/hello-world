import React, { Component } from 'react';
import Cabecera from './components/Cabecera'
import './App.css';

class App extends Component {
  manejaClick = () => {
    console.log('He sido clickeado!');
  }
  render () {
    const miau = 'Bienvenido miau'
    return (
      <div className="App">
        <Cabecera miau={miau} manejaClick={this.manejaClick} />
      </div>
    )
  }
}

export default App;
