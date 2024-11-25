import React, { useState } from "react";
import styles from "../styles/Task.module.css";

function Task({ task, toggleTaskCompletion, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (newText.trim()) {
      editTask(task.id, newText);
      setIsEditing(false);
    }
  };

  return (
    <div className={`${styles.task} ${task.completed ? styles.completed : ""}`}>
      {isEditing ? (
        <form onSubmit={handleEditSubmit} className={styles.editForm}>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className={styles.editInput}
          />
          <button type="submit" className={styles.saveButton}>Save</button>
        </form>
      ) : (
        <>
          <span onClick={() => toggleTaskCompletion(task.id)} className={styles.text}>
            {task.text}
          </span>
          <button onClick={() => setIsEditing(true)} className={styles.editButton}>Edit</button>
          <button onClick={() => deleteTask(task.id)} className={styles.deleteButton}>Delete</button>
        </>
      )}
    </div>
  );
}

export default Task;
