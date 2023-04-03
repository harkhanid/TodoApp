import React, { useContext, useReducer } from "react";

const TasksContext = React.createContext();

export const useTaskContext = () => {
  return useContext(TasksContext);
};

export const actionType = {
  CREATE: "create",
  DELETE: "delete",
  TOGGLE: "toggle",
  SET: "set",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionType.CREATE:
      return [...state, action.payload];
    case actionType.DELETE:
      return state.filter((task) => task.id !== action.payload.id);
    case actionType.TOGGLE:
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, reminder: !task.reminder }
          : task
      );
    case actionType.SET:
      return action.payload;
    default:
      return state;
  }
};

const TasksProvider = ({ children }) => {
  const [tasks, dispatch] = new useReducer(reducer, {});

  return (
    <TasksContext.Provider value={[tasks, dispatch]}>
      {" "}
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
