import React, { Component } from 'react';
import logo from '../logo.svg';

export default class Cabecera extends Component {
    render () {
        const {miau, manejaClick } = this.props
        return (
            <header className="App-header">
            <img onClick={manejaClick} src={logo} className="App-logo" alt="logo" />
            <h1>{miau}</h1>
            <p>
              Hola mundo
            </p>
          </header>
        )
    }
}