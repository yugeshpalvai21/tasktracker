import Task from './Task.js';

const Tasks = (props) => {
  return (
    <div>
      { props.tasks.map((task) => <Task task={task} />) }
    </div>
  )
}

export default Tasks;