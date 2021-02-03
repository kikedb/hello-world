import React, { Component } from 'react';
import logo from '../logo.svg';

const styles = {
  header: ({backgroundColor}) => ({
    backgroundColor,
    minHeight: '100px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white'
  })
}
export default class Cabecera extends Component {
  state = {
    backgroundColor: '#282c34',
  }

  cambiaColorHeader = () => {
    this.setState({ backgroundColor: '#f00'})
  }

  manejaClick = () => {
    const { manejaClick, miau} = this.props
    manejaClick(miau)
  }
  render () {
      const {miau, manejaClick } = this.props
      const {backgroundColor } = this.state
      return (
          <header onClick={this.cambiaColorHeader} style={styles.header( {backgroundColor })}>
          <img onClick={this.manejaClick} src={logo} className="App-logo" alt="logo" />
          <h1>{miau}</h1>
        </header>
      )
  }
}