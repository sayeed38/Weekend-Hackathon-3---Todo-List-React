import React from "react";

function Task(props) {
  const { task, edit, id, deleteTask, handleSave, editTask } = props;
  const [name, setName] = React.useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };
  return (
    <div>
      {edit === true ? (
        <>
          <input type="text" onChange={(e) => handleChange(e)} />
          <button onClick={() => handleSave(id, name)}>Save</button>
        </>
      ) : null}
      <span>{task}</span>
      <button onClick={() => editTask(id)}>Edit</button>
      <button onClick={() => deleteTask(id)}>Delete</button>
    </div>
  );
}

export default Task;
