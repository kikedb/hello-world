import React, { Component } from 'react';
import FormularioSimple from './components/FormularioSimple';
class App extends Component {
  constructor() {
    super()
    // GET
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(x =>x.json())
    //   .then(x => console.log(x))
    fetch('https://jsonplaceholder.typicode.com/users' , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'Kike',
        username: 'kikedb'
      })
    }).then(x => x.json())
    .then(x => console.log(x))

  }
  render () {
    return (
      <div className="App">
        <FormularioSimple />
      </div>
    )
  }
}

export default App;
