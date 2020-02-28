import React from "react";
import { Route } from "react-router-dom";
import { Details } from "./components/DetailsPage.js";
import { MoviesList } from "./components/MoviesList.js";
import { FavoritesPage } from "./components/FavoritesPage.js";

export const ApplicationRoutes = () => (
  <>
    <Route path="/" exact component={MoviesList} />
    <Route path="/movie/:id" exact component={Details} />
    <Route path="/favoritos" exact component={FavoritesPage} />
  </>
);