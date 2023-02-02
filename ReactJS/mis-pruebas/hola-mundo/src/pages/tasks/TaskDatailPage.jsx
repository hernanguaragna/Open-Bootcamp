import React from 'react';
import { useParams } from 'react-router-dom';

const TaskDatailPage = () => {
    const { id } = useParams();
 
    return (
			<div>
				<h1>Task Detail = {id}</h1>
			</div>
		);
}

export default TaskDatailPage;
