import { useEffect } from "react";
import Task from "./Task";
import { useTaskContext, actionType } from "./TasksContext";

export const Tasks = () => {
  const [tasks, dispatch] = useTaskContext();

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      dispatch({ type: actionType.SET, payload: tasksFromServer });
    };
    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:3001/tasks");
    const data = await res.json();
    return data;
  };

  return (
    <>
      {Object.keys(tasks).length != 0 &&
        tasks.map((task) => <Task key={task.id} task={task} />)}
    </>
  );
};

export default Tasks;
