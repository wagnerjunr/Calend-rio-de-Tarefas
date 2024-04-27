import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import Navbar from "./Components/Navbar/Navbar";
import './app.css'


function App() {

  return (
    <div className="container-app">
      <Sidebar />
      <div className="layout-app">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
