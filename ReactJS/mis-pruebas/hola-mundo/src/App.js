// import logo from './logo.svg';
import './App.css';
import Ejemplo2 from './hooks/Ejemplo2';
//import Greeting from './components/pures/greeting';
//import GreetingF from './components/pures/greetingF';
// import TaskListComponent from './components/conteiner/task.list';
// import Ejemplo1 from './hooks/Ejemplo1';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
       {/* !aca voy a importar el componente Greeting */}
       {/* <Greeting name="Hernán"/> */}
       {/* Componente de ejemplo funcional */}
       {/* <GreetingF name={"Hernán"} /> */}
       {/* Componente de Listado de Tareas */}
       {/* <TaskListComponent /> */}
       {/*  Ejemplo de usos de HOOKS*/}
       {/* <Ejemplo1 /> */}
        <Ejemplo2 />
      </header>
    </div>
  );
}

export default App;
