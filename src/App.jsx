import React, { useState } from "react";
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput("");
    }
  };

  const toggleComplete = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>ToDo List</h1>
      <div className="input-group">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a task"
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul className="task-list">
        {tasks.map((task, idx) => (
          <li key={idx} className={task.completed ? "completed" : ""}>
            <span>{task.text}</span>
            <div className="buttons">
              <button onClick={() => toggleComplete(idx)}>✔</button>
              <button onClick={() => deleteTask(idx)}>✖</button>
            </div>
          </li>
        ))}
      </ul>

      {/* Empty state message */}
      {tasks.length === 0 && (
        <p className="empty-state">No tasks yet! Add something to do.</p>
      )}
    </div>
  );
};

export default App;
