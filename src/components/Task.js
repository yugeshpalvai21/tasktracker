const Task = ({ title, description, reminder, finished }) => {
 return (
   <div>
     <h3>Title - { title }</h3>
     <p>Description - { description }</p>
     <p>Finished - { finished ? "YES" : "NO" } </p>
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