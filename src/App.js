import Tasks from './components/Tasks';

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
    finished: true
  }]

  return (
    <div>
      <h1>Welcome To Task Tracker App</h1>
      <Tasks tasks={tasks} />
    </div>
  )
}

export default App;
