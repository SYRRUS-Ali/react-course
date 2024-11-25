import React, { useState } from "react";
import styles from "../styles/TaskForm.module.css";

function TaskForm({ addTask }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task..."
        className={styles.input}
      />
      <button type="submit" className={styles.button}>Add</button>
    </form>
  );
}

export default TaskForm;
