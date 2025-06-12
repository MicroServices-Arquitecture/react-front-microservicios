import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./views/Home";
import Tasks from "./views/Tasks";
import TaskForm from "./views/TaskForm";
import TaskDetails from "./views/TaskDetails";
import Users from "./views/Users";
import UserForm from "./views/UserForm";
import UserDetails from "./views/UserDetails";
import Navbar from "./views/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/tasks/new" element={<TaskForm />} />
          <Route path="/tasks/:id" element={<TaskDetails />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/new" element={<UserForm />} />
          <Route path="/users/:id" element={<UserDetails />} />
        </Routes>
      </main>

      {/* 📢 Contenedor global de notificaciones */}
      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
}

export default App;