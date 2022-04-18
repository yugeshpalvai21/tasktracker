import Task from './Task.js';

const Tasks = (props) => {
  return (
    <div>
      { props.tasks.length > 0 ? props.tasks.map((task) => <Task task={task} />) : "No Tasks" }
    </div>
  )
}

Tasks.defaultProps = {
  tasks: []
}

export default Tasks;