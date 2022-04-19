const Task = ({ id, title, description, reminder, finished, deleteTask }) => {
 return (
   <div>
     <h3>Title - { title }</h3>
     <p>Description - { description }</p>
     <p>Finished - { finished ? "YES" : "NO" } </p>
     <p><button onClick={() => { deleteTask(id) }}>Delete This Task</button></p>
   </div>
 )
}

Task.defaultProps = {
    title: 'defaultTitle',
    description: 'defaultDescription',
    reminder: false,
    finished: false 
}

export default Task;