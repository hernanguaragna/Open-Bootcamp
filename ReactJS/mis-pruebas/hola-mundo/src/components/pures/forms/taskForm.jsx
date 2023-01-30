import React from 'react';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

const TaskForm = ({add,length}) => {
	const nameRef = useRef("");
	const descriptionRef = useRef("");
	const levelRef = useRef("LEVELS.NORMAL");

	function addTask(e) {
		e.preventDefault();
		const newTask = new Task(
			nameRef.current.value,
			descriptionRef.current.value,
			false,
			levelRef.current.value,
		);
		add(newTask);
        clearInputs();
	}
	//*funcion que limpie los inputs

   function clearInputs() {
    nameRef.current.value = '';
    descriptionRef.current.value = '';
    levelRef.current.value = LEVELS.NORMAL;
}

        
	

	return (
		<form
			onSubmit={addTask}
			className="d-flex justify-content-center align-items-center mb-4">
			<div className="form-outline flex-fill">
				<input
					ref={nameRef}
					id="inputName"
					type="text"
					className="form-control form-control-lg mt-2 mb-1"
					required
					autoFocus
					placeholder="Task Name"
				/>
				<input
					ref={descriptionRef}
					id="inputDescription"
					type="text"
					className="form-control form-control-lg mb-1"
					required
					placeholder="Task description"
				/>
				{/* <label htmlFor="selectLevel" className='se-only'>Level</label> */}
				<select
					className="form-control form-control-lg mb-1 br-2"
					ref={levelRef}
					defaultValue={LEVELS.NORMAL}
					id="selectLevel">
					<option value={LEVELS.NORMAL}>Normal</option>
					<option value={LEVELS.URGENT}>Urgent</option>
					<option value={LEVELS.BLOCKING}>Blocking</option>
				</select>
				<button type="submit" className="btn btn-success btn-lg ms-2 mt-2">
					{length > 0 ? "Add Another Task" : "Create your first Task"}
				</button>
			</div>
		</form>
	);
}
TaskForm.prototype = {
	add: PropTypes.func.isRequired,
	length: PropTypes.number.isRequired,
};

export default TaskForm;
