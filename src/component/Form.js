import React, { useContext } from "react";
import AddTask from "./AddTask";
import Tasks from "./Tasks";
import { useTaskContext } from "./TasksContext";

const Form = ({ showAddTask }) => {
  const [tasks, addtask, toggleReminder, deleteTasks] = useTaskContext();
  return (
    <>
      {showAddTask && <AddTask />}
      {tasks && tasks.length !== 0 ? <Tasks /> : "No tasks to show"}
    </>
  );
};

export default Form;
