import React from "react";
import AddTask from "./components/AddTask/AddTask";
import Task from "./components/Task/Task";
import TaskHeader from "./components/TaskHeader/TaskHeader";
function App() {
  return (
    <div>
      {/* Code Here */}
      <TaskHeader/>
      <AddTask />
      <Task />
    </div>
  );
}

export default App;
