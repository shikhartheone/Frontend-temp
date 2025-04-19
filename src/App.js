import React,{useState} from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={task}
        placeholder="Enter a task"
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask} style={{ marginLeft: "10px" }}>
        Add
      </button>

      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {tasks.map((t, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {t}
            <button
              onClick={() => deleteTask(index)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
