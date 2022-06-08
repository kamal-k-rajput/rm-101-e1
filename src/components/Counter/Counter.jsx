import React, { useState, useEffect } from "react";
import styles from "./counter.module.css";

const Counter = ({ data }) => {
  const [count, setcount] = useState(data.count);

  const [newdata, setnewdata] = useState({
    text: data.text,
    count: count,
    done: data.done,
  });
  async function changeCount(value, id) {
    setcount(count + value);
    setnewdata({ ...data });
    let d = await fetch(`http://localhost:3004/task/${id}`, {
      method: "PATCH",
      body: JSON.stringify(newdata),
    });
    let res = await d.json();
  }

  // NOTE: do not delete `data-testid` key value pair
  return (
    <div className={styles.counter}>
      <button
        data-testid="task-counter-increment-button"
        onClick={() => {
          changeCount(1, data.id);
        }}
      >
        +
      </button>
      <span data-testid="task-counter-value">{data.count}</span>
      <button
        data-testid="task-counter-decrement-button"
        onClick={() => {
          changeCount(-1, data.id);
        }}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
