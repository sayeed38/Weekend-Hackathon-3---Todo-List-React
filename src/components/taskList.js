import React from "react";
import Task from "./task";

export default function TaskList({
  taskList,
  deleteTask,
  handleSave,
  editTask
}) {
  return (
    <>
      {taskList.map((task, index) => (
        <Task
          key={task.name + "" + index}
          edit={task.edit}
          id={index}
          task={task.name}
          deleteTask={deleteTask}
          handleSave={handleSave}
          editTask={editTask}
        />
      ))}
      ;
    </>
  );
}
