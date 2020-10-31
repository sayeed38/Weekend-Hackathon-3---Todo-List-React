import React from "react";
import "./../styles/App.css";
import { TextField, Button } from "@material-ui/core";
import TaskList from "./taskList";

function App() {
  const [taskList, setTaskList] = React.useState([]);
  const [taskName, setTaskName] = React.useState("");

  const handleChange = (event) => {
    setTaskName(event.target.value);
    //console.log(taskName);
  };

  const handleAdd = () => {
    if (taskName === "") {
      return;
    }
    let tasks = [...taskList];
    let obj = {
      name: taskName,
      edit: false
    };
    tasks.push(obj);
    setTaskList(tasks);
    setTaskName("");
    //console.log(taskList);
  };

  const editTask = (index) => {
    const arr = [...taskList];
    arr[index].edit = true;
    setTaskList(arr);
  };

  const deleteTask = (index) => {
    const arr = [...taskList];
    arr.splice(index, 1);
    setTaskList(arr);
  };

  const handleSave = (index, value) => {
    const arr = [...taskList];
    if (value === "") {
      arr[index].edit = false;
      setTaskList(arr);
      return;
    }

    arr[index].name = value;
    arr[index].edit = false;
    setTaskList(arr);
  };

  return (
    <div id="main">
      <TextField
        id="task"
        value={taskName}
        label="TaskName"
        onChange={(e) => handleChange(e)}
      />
      <Button id="btn" variant="contained" onClick={handleAdd} color="primary">
        Add
      </Button>
      <TaskList
        taskList={taskList}
        deleteTask={deleteTask}
        handleSave={handleSave}
        editTask={editTask}
      />
    </div>
  );
}

export default App;
