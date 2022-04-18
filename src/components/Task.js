const Task = (props) => {
 return (
   <div>
     <h3>Title - { props.task.title }</h3>
     <p>Description - { props.task.description }</p>
     <p>Finished - { props.task.finished ? "YES" : "NO" } </p>
   </div>
 )
}

export default Task;