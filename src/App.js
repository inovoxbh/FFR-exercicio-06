import React from "react";
import "./styles.css";
import { MoviesList } from "./components/MoviesList";
import { ApplicationRoutes } from "./ApplicationRoutes";

export default function App() {
  return (
    <div className="App">
      <h1>Populares</h1>
      <ApplicationRoutes />
    </div>
  );
}
