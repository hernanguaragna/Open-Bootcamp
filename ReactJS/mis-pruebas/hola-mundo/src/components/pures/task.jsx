import React,{useEffect} from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";
import { LEVELS } from '../../models/levels.enum';
import "../../styles/task.scss"

const TaskComponent = ({ task, completed }) => {
 
	useEffect(() => {
		console.log('Created Task')
		return () => {
			console.log(`Task ${task.name} is going to`)
		};
	}, [task]);
	
	//*Funcion que devuelve un badge dependiendo del
	//*nivel de la tarea

	function taskIconLevelBadge(){
		switch (task.level) {
			case LEVELS.NORMAL:
				return(
					<h6 className="mb-0">
					<span className="badge bg-primary">
					{task.level}

					</span>

					</h6>)
			case LEVELS.URGENT:
				return(
					<h6 className="mb-0">
					<span className="badge bg-warning">
					{task.level}

					</span>

					</h6>)
			case LEVELS.BLOCKING:
				return(
					<h6 className="mb-0">
					<span className="badge bg-danger">
					{task.level}

					</span>

					</h6>
				)
				
				default:
					break;
				}

	}
	//*funcion que retorna el swich del icono verde si la action esta hecha y gris si esta sin hacer.

	const taskIconCompleted = () => (task.completed ? <i onClick={() => completed(task)} className="bi-toggle-on task-action" style={{color: 'green'}}></i> : <i onClick={() => completed (task)} className="bi-toggle-off task-action" style ={{color:'grey'}}></i>)
	
	
	
	return (
		<tr className="fw-normal">
		<th>
			<span className="ms-2">{task.name}</span>
		</th>
		<td className="align-middle">
			<span>{task.description}</span>

		</td>
		<td className="align-middle">
			{taskIconLevelBadge()}

		</td>
		<td className="align-middle">
		{taskIconCompleted()}
		<i className="bi-trash task-action" style={{color: 'tomato'}}></i> 
			
		</td>

		</tr>
		
	);
};

TaskComponent.propTypes = {
	task: PropTypes.instanceOf(Task),
	completed: PropTypes.func.isRequired
};

export default TaskComponent;
