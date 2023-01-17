import React, {useState, useEffect} from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pures/task';
import "../../styles/task.scss";


const TaskListComponent = () => {

    const defaultTask = new Task("Example", "Default description", false,LEVELS.NORMAL);
  //*Estado del componente

    const [tasks, settasks] = useState(defaultTask);  
    const [loading, setloading] = useState(true);  

    //*Control del Ciclo de vida del componente
    useEffect(() => {
        console.log('Task state has benn modified')
        setloading(false)
        return () => {
            console.log('TaskList component is going to unmount...')
        };
    }, []);





    const changeCompleted = (id) => {
        console.log("TODO: Cambiar estado de una tarea")
   }

    return (
        <div>
            <div>
               <h1>Your Task:</h1> 
            </div>
            {/*  TODO aplicar un for/map para renderizar una lista */}
            <TaskComponent task={defaultTask}> </TaskComponent>
        </div>
    );
};





export default TaskListComponent;
