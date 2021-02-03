import React, { Component } from 'react';
import logo from '../logo.svg';

// .App-header {
//   backgroundColor: #282c34;
//   /* min-height: 100vh; */
//   min-height: 100px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   font-size: calc(10px + 2vmin);
//   color: white;
// }

const styles = {
  header: {
    backgroundColor: '#282c34',
    minHeight: '100px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white'
  }
}
export default class Cabecera extends Component {
  manejaClick = () => {
    const { manejaClick, miau} = this.props
    manejaClick(miau)
  }
  render () {
      const {miau, manejaClick } = this.props
      return (
          <header style={styles.header}>
          <img onClick={this.manejaClick} src={logo} className="App-logo" alt="logo" />
          <h1>{miau}</h1>
        </header>
      )
  }
}