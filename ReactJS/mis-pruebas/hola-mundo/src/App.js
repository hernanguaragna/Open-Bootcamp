import logo from './logo.svg';
import './App.css';
import Greeting from './components/pures/greeting';
import GreetingF from './components/pures/greetingF';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       {/* !aca voy a importar el componente Greeting */}
       {/* <Greeting name="Hernán"/> */}
       <GreetingF name={"Hernán"} />
      </header>
    </div>
  );
}

export default App;
