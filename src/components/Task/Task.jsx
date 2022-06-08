import React from "react";
import styles from "./task.module.css";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import  Counter  from "../Counter/Counter";
import axios from "axios";
const Task = () => {
  const [data, setdata] = useState([]);
  const [print, setprint] = useState(false);
  useEffect(() => {
    getdata();
  }, []);
  // NOTE: do not delete `data-testid` key value pair
  async function getdata() {
    let d = await fetch("http://localhost:3004/task", { method: "GET" });
    let res = await d.json();
    setdata(res);
    setprint(true);
  }
  function handleCount(value) {
    getdata();
  }
  async function removeTask(id) {
    await axios.delete("http://localhost:3004/task/" + id).then(() => {
      getdata();
    });
  }
  return (
    <li data-testid="task" className={styles.task}>
      <div data-testid="task-text">
        {print ? (
          data.map((el) => {
            return (
              <div key={nanoid(4)}>
                <input type="checkbox" data-testid="task-checkbox" />
                <div>{el.text}</div>
                <div className="count-container">
                  <Counter data={el} />
                </div>
                <button
                  data-testid="task-remove-button"
                  onClick={() => {
                    removeTask(el.id);
                  }}
                >
                  Remove Task
                </button>
              </div>
            );
          })
        ) : (
          <div>loading tasks</div>
        )}
      </div>

      {/* Counter here */}
    </li>
  );
};

export default Task;
