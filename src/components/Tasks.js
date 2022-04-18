import { getByTitle } from '@testing-library/react';
import Task from './Task.js';

const Tasks = ({ tasks }) => {
  return (
    <div>
      { tasks.length > 0 ? tasks.map((task) => <Task key={task.id} {...task} />) : "No Tasks" }
    </div>
  )
}

Tasks.defaultProps = {
  tasks: []
}

export default Tasks;