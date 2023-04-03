import Header from "./component/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Footer from "./component/footer";
import Form from "./component/Form";
import { About } from "./component/About";
import TasksProvider from "./component/TasksContext";

const App = () => {
  const [showAddTask, setShowAddTask] = new useState(false);
  const toggleForm = () => {
    setShowAddTask((prev) => !prev);
  };

  return (
    <Router>
      <TasksProvider>
        <div className="container">
          <Header onClick={toggleForm} />
          <Routes>
            <Route
              path="/"
              exact
              element={<Form showAddTask={showAddTask} />}
            />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </div>
      </TasksProvider>
    </Router>
  );
};

export default App;
