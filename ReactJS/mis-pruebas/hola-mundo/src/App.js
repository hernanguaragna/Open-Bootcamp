import logo from './logo.svg';
import './App.css';
//import Greeting from './components/pures/greeting';
//import GreetingF from './components/pures/greetingF';
import TaskListComponent from './components/conteiner/task.list';
import ComponenteA from './components/pures/forms/componenteA';

function App() {
  const contactoPrueba = {
    nombre: 'Cosme',
    apellido: 'Fulanito',
    email: 'cosmefulanito@gmail.com',
    conectado: false,
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       {/* !aca voy a importar el componente Greeting */}
       {/* <Greeting name="Hernán"/> */}
       {/* Componente de ejemplo funcional */}
       {/* <GreetingF name={"Hernán"} /> */}
       {/* Componente de Listado de Tareas */}
       <TaskListComponent />
       <ComponenteA contacto={contactoPrueba} />
      </header>
    </div>
  );
}

export default App;
