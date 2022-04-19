import Tasks from './components/Tasks';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

const App = () => {
  const [tasks, setTasks] = useState([{
    id: uuidv4(),
    title: 'First Task',
    description: 'small description about first task',
    reminder: false,
    finished: false
  },
  {
    id: uuidv4(),
    title: 'Second Task',
    description: 'small description about second task',
    reminder: false,
    finished: true
  }])
  
  return (
    <div>
      <h1>Welcome To Task Tracker App</h1>
      <Tasks tasks={tasks} />
    </div>
  )
}

export default App;
