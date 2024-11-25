import React from "react";
import Task from "./Task";
import styles from "../styles/TaskList.module.css";

function TaskList({ tasks, toggleTaskCompletion, deleteTask, editTask }) {
  return (
    <div className={styles.taskList}>
      {tasks.length === 0 ? (
        <p className={styles.emptyMessage}>No tasks yet. Add one!</p>
      ) : (
        tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            toggleTaskCompletion={toggleTaskCompletion}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;
