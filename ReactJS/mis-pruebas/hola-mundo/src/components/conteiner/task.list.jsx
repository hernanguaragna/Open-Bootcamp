import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pures/task';


const TaskListComponent = () => {
   const defaultTask = new Task("Example", "Default description", false,LEVELS.NORMAL);

    return (
        <div>
            <div>
                Your Task:
            </div>
            {/*  TODO aplicar un for/map para renderizar una lista */}
            <TaskComponent Task={defaultTask}> </TaskComponent>
        </div>
    );
};





export default TaskListComponent;
