import React from "react";
import "./App.scss";
import AppRouter from "./features/app-router/AppRouter";
import Navbar from "./features/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  );
}

export default App;
