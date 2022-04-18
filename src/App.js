const App = () => {
  const tasks = [{
    title: 'First Task',
    description: 'small description about first task',
    reminder: false,
    finished: false
  },
  {
    title: 'Second Task',
    description: 'small description about second task',
    reminder: false,
    finished: false
  }]

  return (
    <div>
      <h1>Welcome To Task Trackeeeer App</h1>
      {tasks.map((task) => (<p>{task.title}</p>))}
    </div>
  )
}

export default App;
