import React from "react";
import styles from "./addTask.module.css";
import { useState } from "react";

const AddTask = () => {
  const [formdata, setformdata] = useState({
    text: "a",
    done: "false",
    count: 1,
  });
  function handleChange(e) {
    e.preventDefault();
    setformdata({ ...formdata, text: e.target.value });
  }
  function sendTask() {
    // e.preventDefault();
    fetch("http://localhost:3004/task", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-type": "application/json;",
      },
    }).then((res) => {
      console.log(res);
    });
  }
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div className={styles.todoForm}>
      <input data-testid="add-task-input" type="text" onChange={handleChange} />
      <button
        data-testid="add-task-button"
        onClick={(e) => {
          e.preventDefault();
          sendTask();
        }}
      >
        Add task
      </button>
    </div>
  );
};

export default AddTask;
