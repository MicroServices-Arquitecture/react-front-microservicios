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
import Breadcrumbs from "./views/Breadcrumbs";
import Footer from "./views/Footer";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Breadcrumbs />

      <main className="content-wrapper container mt-4">
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

      <ToastContainer position="top-center" autoClose={2000} />
      <Footer />
    </div>
  );
}

export default App;