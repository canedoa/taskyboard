import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(["Estudiar", "Repasar ejercicios", "Resolver problema del día"]);

  const [newTask, setNewTask] = useState("");

  return (
    <>
      <h1>TaskyBoard</h1>
      <p>Mi primer proyecto en React 🎉</p>
      <input type="text" placeholder="Nueva tarea" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
      <p>Estás escribiendo: {newTask}</p>
      <ul>
        {tasks.map((task) => (
          <li>{task}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
