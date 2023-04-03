import React from "react";
import { useState } from "react";
import { useTaskContext, actionType } from "./TasksContext";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);
  const [tasks, dispatch] = useTaskContext();

  const addTasks = async (obj) => {
    console.log(obj);
    const res = await fetch("http://localhost:3001/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    const data = await res.json();

    dispatch({ type: actionType.CREATE, payload: data });
  };

  return (
    <form
      className="add-form"
      onSubmit={(e) => {
        e.preventDefault();
        addTasks({
          text: text,
          day: day,
          reminder: reminder,
        });
        setDay("");
        setText("");
        setReminder(false);
      }}
    >
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          placeholder="Add task"
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Add Day & time"
          value={day}
          onChange={(e) => {
            setDay(e.target.value);
          }}
        />
      </div>
      <div className="form-control form-control-checkbox">
        <label>Reminder</label>
        <input
          type="checkbox"
          placeholder="Set reminder"
          value={reminder}
          checked={reminder}
          onChange={(e) => {
            setReminder(e.currentTarget.checked);
          }}
        />
      </div>
      <input type="submit" value="save task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
