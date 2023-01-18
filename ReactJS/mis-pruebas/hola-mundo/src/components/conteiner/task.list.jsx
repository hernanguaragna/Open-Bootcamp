import React, {useState, useEffect} from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pures/task';
import "../../styles/task.scss";


const TaskListComponent = () => {

    const defaultTask = new Task("Example", "Default description", false, LEVELS.NORMAL);
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
            <div className='col-12'>
            <div className='card'>
            {/* Card Header */}
            <div className='card-header p-3'>
                <h5>
                    Your Task:
                </h5>
            </div>
            {/* Card Body(Content) */}
            <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height:'400px'}}></div>
            <table>
            <thead>

                <tr>
                    <th scope='col'>Title</th>
                    <th scope='col'>Description</th>
                    <th scope='col'>Priority</th>
                    <th scope='col'>Actions</th>
                </tr>

            </thead>

            <tbody>
                {/* TODO iterar sobre una lista de tareas */}

            <TaskComponent task={defaultTask}> </TaskComponent>
            </tbody>
            </table>
            </div>
             
            </div>
            {/*  TODO aplicar un for/map para renderizar una lista */}
        </div>
    );
};





export default TaskListComponent;
