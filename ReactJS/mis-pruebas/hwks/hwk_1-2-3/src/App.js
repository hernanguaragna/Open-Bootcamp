import agente from '../src/img/agente.png';
import './App.css';
import ComponenteA from './components/pures/forms/componenteA';

function App() {
  const contactoDePrueba = {
    nombre: 'James',
    apellido: 'Bond',
    email: 'agente007@gmail.com',
    conectado: false,
  };
  return (
    <div className="App">
      <header className="App-header">
              <img src={agente} className="App-logo" alt="logo" />
        <ComponenteA contacto={contactoDePrueba} />
        
      </header>
    </div>
  );
}

export default App;
