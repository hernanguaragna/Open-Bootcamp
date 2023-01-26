import React, { useState, useEffect } from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pures/task";
import "../../styles/task.scss";
import TaskForm from "../pures/forms/taskForm";

const TaskListComponent = () => {
	const defaultTask1 = new Task(
		"Example",
		"Description 1",
		true,
		LEVELS.NORMAL,
	);
	const defaultTask2 = new Task(
		"Example",
		"Description 2",
		false,
		LEVELS.URGENT,
	);
	const defaultTask3 = new Task(
		"Example",
		"Description 3",
		false,
		LEVELS.BLOCKING,
	);
	//*Estado del componente

	const [tasks, setTasks] = useState([
		defaultTask1,
		defaultTask2,
		defaultTask3,
	]);
	const [loading, setloading] = useState(true);

	//*circle life control of the component
	useEffect(() => {
		console.log("Task state has benn modified");
		setloading(false);
		return () => {
			console.log("TaskList component is going to unmount...");
		};
	}, [tasks]);

	function completeTask(task) {
		console.log("Complit this task", task);
		const index = tasks.indexOf(task);
		const tempTasks = [...tasks];
		tempTasks[index].completed = !tempTasks[index].completed;
		//*we apdate the state of the component whith the new list and it will update the iteration of the tas in order to show the task updated
		setTasks(tempTasks);
	}

    function deleteTask(task){
        console.log("Complit this task", task);
		const index = tasks.indexOf(task);
		const tempTasks = [...tasks];
        tempTasks.splice(index,1);
        setTasks(tempTasks)
	}

	const Table = ()=>{
		return(
			<table>
						<thead>
							<tr>
								<th scope="col">Title</th>
								<th scope="col">Description</th>
								<th scope="col">Priority</th>
								<th scope="col">Actions</th>
							</tr>
						</thead>

						<tbody>
							{/*iterar sobre una lista de tareas */}
							{tasks.map((task, index) => {
								return (
									<TaskComponent
										key={index}
										task={task}
										completed={completeTask}
                                        deleted={deleteTask}>
                                        </TaskComponent>

								);
							})}
						</tbody>
					</table>

		)
	}
	


function addTask(task){
	console.log("Complit this task", task);
	// const index = tasks.indexOf(task);
	const tempTasks = [...tasks];
	tempTasks.push(task)
	setTasks(tempTasks)
}
let tasksTable
if(tasks.length === 0){
	tasksTable =  <Table />
}else{
	tasksTable = 
	(<div>
	<h3>There are no tasks to show</h3>
	<h4>Please, create one</h4>
	</div>)
		
}

	return (
		<div>
			<div className="col-12">
				<div className="card">
					{/* Card Header */}
					<div className="card-header p-3">
						<h5>Your Task:</h5>
					</div>
					{/* Card Body(Content) */}
					<div
						className="card-body"
						data-mdb-perfect-scrollbar="true"
						style={{ position: "relative", height: "400px" }}>
							{tasksTable}

						</div>
				</div>
			</div>
				<TaskForm add={addTask}></TaskForm>
			
		</div>
	);
};

export default TaskListComponent;
