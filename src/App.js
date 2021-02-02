import Cabecera from './components/Cabecera'
import './App.css';

function App() {
  manejaClick = () => {
    console.log('He sido clickeado!');
  }
  const miau = 'Bienvenido miau'
  return (
    <div className="App">
      <Cabecera miau={miau} manejaClick={this.manejaClick} />
    </div>
  );
}

export default App;
