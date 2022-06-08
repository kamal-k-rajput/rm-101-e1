import React from "react";
import styles from "./taskHeader.module.css";
import { useState, useEffect } from "react";
const TaskHeader = () => {
  // sample values to be replaced
  const [totalTask, settotalTask] = useState(0);
  const [uncompletedTask, setuncompletedTask] = useState(0);
  async function getcompletedTasks() {
    let d = await fetch("http://localhost:3004/task?done=false", {
      method: "GET",
    });
    let res = await d.json();
    setuncompletedTask(res.length);
  }
  async function getTotalTasks() {
    let d = await fetch("http://localhost:3004/task", {
      method: "GET",
    });
    let res = await d.json();
    settotalTask(res.length);
  }

  useEffect(() => {
    getcompletedTasks();
    getTotalTasks();
  }, []);
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-header" className={styles.taskHeader}>
      <b data-testid="header-remaining-task">
        Tasks remaining{uncompletedTask}
      </b>
      <b data-testid="header-total-task">Total task:{totalTask}</b>
      {console.log(uncompletedTask)}
    </div>
  );
};

export default TaskHeader;
