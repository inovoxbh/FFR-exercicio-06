import React from "react";
import { Route } from "react-router-dom";
import { Details } from "./components/DetailsPage.js";
import { MoviesList } from "./components/MoviesList.js";

export const ApplicationRoutes = () => (
  <>
    <Route path="/" exact component={MoviesList} />
    <Route path="/movie/:id" exact component={Details} />
  </>
);