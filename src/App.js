import React from "react";
import "./styles.css";
import { MoviesList } from "./components/MoviesList";
import { ApplicationRoutes } from "./ApplicationRoutes";

export default function App() {
  return (
    <div className="App">
      <ApplicationRoutes />
    </div>
  );
}
