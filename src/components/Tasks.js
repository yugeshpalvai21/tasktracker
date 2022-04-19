import Task from './Task.js';

const Tasks = ({ tasks, deleteTask }) => {
  return (
    <div>
      { tasks.length > 0 ? tasks.map((task) => <Task key={task.id} {...task} deleteTask={deleteTask}/>) : "No Tasks" }
    </div>
  )
}

Tasks.defaultProps = {
  tasks: []
}

export default Tasks;