import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react';
function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'See doctor'
    },
    {
        id:2,
        text: 'Go to school'
    }
])
  return (
    <div className="container">
      <Header/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
