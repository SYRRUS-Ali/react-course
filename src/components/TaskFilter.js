import React from "react";
import styles from "../styles/TaskFilter.module.css";

function TaskFilter({ filter, setFilter }) {
  return (
    <div className={styles.filter}>
      <button
        className={filter === "all" ? styles.active : ""}
        onClick={() => setFilter("all")}
      >
        All
      </button>
      <button
        className={filter === "completed" ? styles.active : ""}
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>
      <button
        className={filter === "pending" ? styles.active : ""}
        onClick={() => setFilter("pending")}
      >
        Pending
      </button>
    </div>
  );
}

export default TaskFilter;
