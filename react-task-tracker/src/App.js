import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react';
function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'See doctor',
        reminder: true
    },
    {
        id:2,
        text: 'Go to school',
        reminder: true 
    }
])
//delete task
const deleteTask = (id)=>{
  setTasks(tasks.filter((task)=>task.id !== id))
}
//toggle reminder
const toggleReminder = (id)=>{
  setTasks(tasks.map((task)=>task.id ===id ? {...task, reminder : !task.reminder} : task)
  )
}
  return (
    <div className="container">
      <Header/>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete = {deleteTask} onToggle = {toggleReminder}/> : 'No Tasks to show'}
    </div>
  );
}

export default App;
