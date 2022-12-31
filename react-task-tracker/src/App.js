import Header from "./components/Header";
import Tasks from "./components/Tasks";
// With state:
import { useState } from "react";

import AddTask from "./components/AddTask";

function App() {
  //Declaring a new state variable to show/hide the button (parameter in useState is the default state)
  const [showAddTask, setShowAddTask] = useState(false);

  //Declaring a new state variable called 'tasks'
  //we want this to exist globally so that other components can access it (make tasks a prop instead to pass through to the component)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Dog Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Hair Appointment",
      day: "Feb 6th at 2:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Dick Appointment",
      day: "Feb 7th at 2:30pm",
      reminder: true,
    },
  ]);

  //Adding a task
  function addTask(task) {
    console.log(task);
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    //use the new setTasks function created when making state to add newTask
    setTasks([...tasks, newTask]);
  }

  //Delete task function to send down as a prop (function lives here as tasks are stored globally)
  function deleteTask(id) {
    // console.log('delete', id);
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="App">
      <Header onAdd={() => setShowAddTask(!showAddTask)} />
      {/* //if showAddTask is true then show the forms */}
      {showAddTask && <AddTask onAdd={addTask} />}
      {/* If there are more than 0 tasks then show them, else show a message */}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        "No tasks... Create one!"
      )}
    </div>
  );
}

export default App;
