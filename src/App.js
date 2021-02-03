import React, { Component } from 'react';
import axios from 'axios';
import FormularioSimple from './components/FormularioSimple';
class App extends Component {
  // constructor() {
  //   super()
  //   // axios.get('https://jsonplaceholder.typicode.com/users')
  //   //   .then(({data}) => console.log(data))

  //   // axios.post('https://jsonplaceholder.typicode.com/users', {
  //   //   name: 'kike',
  //   //   username: 'kikedb'
  //   // }).then(({data}) => console.log(data))
  //   // GET
  //   // fetch('https://jsonplaceholder.typicode.com/users')
  //   //   .then(x =>x.json())
  //   //   .then(x => console.log(x))
  //   // fetch('https://jsonplaceholder.typicode.com/users' , {
  //   //   method: 'POST',
  //   //   headers: {
  //   //     'Content-Type': 'application/json'
  //   //   },
  //   //   body: JSON.stringify({
  //   //     name: 'Kike',
  //   //     username: 'kikedb'
  //   //   })
  //   // }).then(x => x.json())
  //   // .then(x => console.log(x))
  // }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(({data}) => console.log(data))
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
