const Tasks = (props) => {
  return (
    <div>
      {props.tasks.map((task) => (<p>{task.title}</p>))}
    </div>
  )
}

export default Tasks;