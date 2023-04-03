import React from "react";
import { FaTimes } from "react-icons/fa";
import { useTaskContext, actionType } from "./TasksContext";

const Task = ({ task }) => {
  const [tasks, dispatch] = useTaskContext();

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:3001/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  const toggleReminder = async (id) => {
    let data = await fetchTask(id);
    data.reminder = !data.reminder;
    await fetch(`http://localhost:3001/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    dispatch({ type: actionType.TOGGLE, payload: { id: id } });
  };

  const deleteTasks = async (id) => {
    await fetch(`http://localhost:3001/tasks/${id}`, { method: "DELETE" });
    dispatch({ type: actionType.DELETE, payload: { id: id } });
  };

  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => {
        toggleReminder(task.id);
      }}
    >
      <h3>
        {task.text}
        <FaTimes
          onClick={() => {
            deleteTasks(task.id);
          }}
          style={{ color: "red", cursor: "pointer" }}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
